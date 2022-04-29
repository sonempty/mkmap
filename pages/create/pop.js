import { FormProvider, useForm } from "react-hook-form";
import {
  getLocationCode,
  getPostalCode,
} from "../../components/Form/components/cambodia";
import LocationSelect from "../../components/Form/components/Location";
import { PopForm } from "../../components/Form/components/Pop";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";

export default function CreatePopPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let { province, khan, sangkat, pop_no, physical_address, lat_lng } = data;
    let postal_code = getPostalCode(province, khan, sangkat);
    let ll = lat_lng
      .split(",")
      .map((x) => +x.replace(/\s|[a-zA-Z]|\(|\)/g, ""));
    let location_code = getLocationCode(province);

    let pop_name = location_code + String(pop_no).padStart(3, "0");
    let isOk = /\w{3}\d{3}$/.test(pop_name);
    if (isOk) {
      const newPop = {
        name: pop_name,
        postal_code,
        physical_address,
        lat_lng: { lat: ll[0], lng: ll[1] },
      };

      createOne("/pops", { data: newPop })
        .then((x) => alert(`POP CREATED: ${pop_name}`))
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
          <PopForm />
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
