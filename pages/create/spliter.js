import { FormProvider, useForm } from "react-hook-form";
import LocationSelect from "../../components/Form/components/Location";
import { SpliterForm } from "../../components/Form/components/Spliter";
import { CreateLayout } from "../../components/Layout";
import { createOne } from "../../utils/fetch";

export default function CreateSpliterPage() {
  const methods = useForm();
  const onSubmit = async (data) => {
    let { cores, spliter_no, mdf_name, ports } = data;

    let spliter_name = [
      mdf_name,
      "-S",
      String(spliter_no).padStart("2", "0"),
    ].join("");

    let isOk = /\w{3}\d{3}-M\d{3}-S\d{2}$/.test(spliter_name) && spliter_no;

    if (isOk) {
      let newSpliter = {
        name: spliter_name,
        cores,
        ports,
      };
      createOne("/spliters", { data: newSpliter })
        .then((x) => alert(`SPLITER CREATED: ${spliter_name}`))
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
          <SpliterForm />
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
