import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import LocationSelect from "../../components/Form/components/Location";
import { BoxForm } from "../../components/Form/components/Box";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";
import { getPostalCode } from "../../components/Form/components/cambodia";

const PORT_STATUS = [
  "FREE",
  "USED",
  "BOOKING",
  "EXPRIED",
  "BROKEN",
  "ARCHIVED",
];

function genPort(cores) {
  let ports = [];
  for (let i = 0; i < cores; i++)
    ports.push({ name: `P${i + 1}`, to: "", status: PORT_STATUS[0], type: "SC/PC" });
  return ports;
}

export default function CreateBoxPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let {
      cores,
      name,
      ports,
      lat_lng,
      physical_address,
      province,
      khan,
      sangkat,
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
    };

    createOne("/boxes", { data: newbox })
      .then(() => alert(`BOX CREATED: ${name}`))
      .catch((e) => alert(e));
  };

  useEffect(() => methods.setValue("ports", genPort(8)), []);

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
