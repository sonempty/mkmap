import { useForm } from "react-hook-form";
import { useState } from "react";
import { CreateLayout } from "../components/Layout";
import { getMany } from "../utils/fetch";
import Link from "next/link";
const object_plural = ["boxes", "pops", "olts", "mdfs", "spliters", "closures"];

export default function SearchPage() {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    let type = data.type;
    let search_text = data.search_text;
    getMany(`\/${type}?filters[name][$contains]=${search_text}`)
      .then((x) => setData(x))
      .catch((e) => console.log(e));
  };

  return (
    <CreateLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="m-8 border-2">
        <div className="flex items-center p-4">
          <p className="text-lg font-semibold px-4 w-1/4">Select Type</p>
          <select {...register("type")} className="px-4 py-2 border w-3/4">
            {object_plural.map((p, i) => (
              <option value={p} key={i}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center p-4">
          <p className="text-lg font-semibold px-4 w-1/4">Text to search</p>
          <input
            {...register("search_text", { required: true, minLength: 3 })}
            placeholder="eg: PPH001, SRP002-M02, PPH001-B..."
            className="px-4 py-2 border w-3/4"
          />
          {errors.search_text && (
            <span className="text-red-500 px-4">This field is required</span>
          )}
        </div>

        <div className="flex items-center justify-center p-4">
          <input
            type="submit"
            value={"Search"}
            className="px-8 py-2 bg-blue-600 rounded-md shadow-md text-white font-bold"
          />
        </div>
      </form>

      <div className="flex flex-wrap m-8">
        {data.map((d, i) => (
          <div key={i}>
            <Link href={`\/${getValues("type")}\/${d.id}`}>
              <a className="p-2 border w-28">{d.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </CreateLayout>
  );
}
