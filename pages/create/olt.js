import { FormProvider, useForm } from "react-hook-form";
import LocationSelect from "../../components/Form/components/Location";
import { OltForm } from "../../components/Form/components/Olt";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";

export default function CreateOltPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let { olt_model, olt_no, pop_name, ip_address, ports } = data;

    let olt_name = [
      pop_name,
      "-",
      String(olt_no).padStart("2", "0"),
      olt_model,
    ].join("");

    let isOk = /\w{3}\d{3}-\d{2}.{4}$/.test(olt_name);

    if (isOk) {
      let newOlt = {
        name: olt_name,
        model: olt_model,
        ip_address,
        ports,
      };
      console.log(data);
      createOne("/olts", { data: newOlt })
        .then((x) => console.log(x))
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
          <OltForm />
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
