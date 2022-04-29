import { FormProvider, useForm } from "react-hook-form";
import LocationSelect from "../../components/Form/components/Location";
import { BoxForm } from "../../components/Form/components/Box";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";
import { getPostalCode } from "../../components/Form/components/cambodia";

export default function CreateBoxPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let {
      cores,
      box_no,
      mdf_name,
      ports,
      lat_lng,
      physical_address,
      province,
      khan,
      sangkat,
    } = data;
    let postal_code = getPostalCode(province, khan, sangkat);

    let box_name = [mdf_name, "-B", String(box_no).padStart(3, "0")].join("");
    let ll = lat_lng
      .split(",")
      .map((x) => +x.replace(/\s|[a-zA-Z]|\(|\)/g, ""));

    let isOk = /\w{3}\d{3}-M\d{3}-B\d{3}$/.test(box_name) && box_no;

    if (isOk) {
      let newbox = {
        name: box_name,
        cores,
        ports,
        physical_address,
        postal_code,
        lat_lng: { lat: ll[0], lng: ll[1] },
      };
      
      createOne("/boxes", { data: newbox })
        .then(() => alert(`BOX CREATED: ${box_name}`))
        .catch((e) => alert(e));
    } else alert("You type wrong!");
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
            value="Create Object"
            className="w-full rounded-md bg-blue-500 hover:bg-blue-800 p-2 text-white shadow-md"
          />
        </form>
      </FormProvider>
    </CreateLayout>
  );
}
