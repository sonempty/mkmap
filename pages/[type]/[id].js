import { FormProvider, useForm } from "react-hook-form";
import { BoxForm } from "../../components/Form/components/Box";
import {
  getPKS,
  getPostalCode,
} from "../../components/Form/components/cambodia";
import LocationSelect from "../../components/Form/components/Location";
import { CreateLayout } from "../../components/Layout";
import { getOne, updateOne } from "../../utils/fetch";

export default function EditPage({ box }) {
  if (!box) return <h1>Data Not Existed!</h1>;
  const methods = useForm({
    defaultValues: box,
  });
  const onSubmit = async (data) => {
    let {
      type,
      id,
      cores,
      name,
      ports,
      lat_lng,
      physical_address,
      province,
      khan,
      sangkat,
      manufacturer,
    } = data;
    let postal_code = getPostalCode(province, khan, sangkat);

    let ll = lat_lng
      .split(",")
      .map((x) => +x.replace(/\s|[a-zA-Z]|\(|\)/g, ""));

    let newbox = {
      name,
      cores,
      ports,
      physical_address,
      postal_code,
      lat_lng: { lat: ll[0], lng: ll[1] },
      manufacturer,
    };

    updateOne(`\/${type}\/${id}`, { data: newbox })
      .then(() => alert(`BOX UPDATED: ${name}`))
      .catch((e) => alert(e));
  };
  return (
    <CreateLayout>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="my-4 mx-12 space-y-2 border-2 p-2"
        >
          <LocationSelect />
          <BoxForm />
          <input
            type="submit"
            value="Update Object"
            className="w-full rounded-md bg-blue-500 hover:bg-blue-800 p-2 text-white shadow-md"
          />
        </form>
      </FormProvider>
    </CreateLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { type, id } = params;
  const data = await getOne(`\/${type}\/${id}?populate=*`);
  if (!data)
    return {
      props: { box: null },
    };
  let {
    name,
    cores,
    lat_lng,
    ports,
    physical_address,
    postal_code,
    manufacturer,
  } = data;
  lat_lng = `${lat_lng.lat},${lat_lng.lng}`;
  let { province, khan, sangkat } = getPKS(postal_code);
  ports = ports.map((p) => ({ name: p.name, status: p.status }));

  let box = {
    type,
    id,
    name,
    cores,
    lat_lng,
    ports,
    physical_address,
    province,
    khan,
    sangkat,
    manufacturer,
  };
  // Pass data to the page via props
  return {
    props: { box },
  };
}
