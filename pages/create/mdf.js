import { FormProvider, useForm } from "react-hook-form";
import { getPostalCode } from "../../components/Form/components/cambodia";
import LocationSelect from "../../components/Form/components/Location";
import { MdfForm } from "../../components/Form/components/Mdf";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";

export default function CreatePopPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let {
      province,
      khan,
      sangkat,
      mdf_no,
      mdf_cores,
      pop_name,
      physical_address,
      lat_lng,
    } = data;
    let postal_code = getPostalCode(province, khan, sangkat);
    let ll = lat_lng
      .split(",")
      .map((x) => +x.replace(/\s|[a-zA-Z]|\(|\)/g, ""));

    let mdf_name = [pop_name, "-M", String(mdf_no).padStart(3, "0")].join("");
    let isOk = /\w{3}\d{3}-M\d{3}$/.test(mdf_name) && mdf_no;

    if (isOk) {
      const newMdf = {
        name: mdf_name,
        cores: mdf_cores,
        postal_code,
        physical_address,
        lat_lng: { lat: ll[0], lng: ll[1] },
      };

      createOne("/mdfs", { data: newMdf })
        .then((x) => alert(`MDF CREATED: ${mdf_name}`))
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
          <MdfForm />
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
