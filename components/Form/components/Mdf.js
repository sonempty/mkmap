import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { getPostalCode } from "./cambodia";
import { getMany } from "../../../utils/fetch";

const MDF_CORES = [8, 16, 24, 48, 96];

export const MdfForm = () => {
  const [pops, setPops] = useState([]);
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const loadPop = async (e) => {
    e.preventDefault();
    let [province, khan, sangkat] = getValues(["province", "khan", "sangkat"]);
    let postal_code = getPostalCode(province, khan, sangkat);

    getMany(`\/pops?filters[postal_code][$eq]=${postal_code}`).then((pops) => {
      console.log(pops);
      let new_pops = pops.filter((p) => p.postal_code == postal_code);
      if (new_pops) {
        setValue("pop_name", new_pops[0].name);
        setPops(new_pops);
      }
    });
  };

  return (
    <>
      <div className="flex space-x-2">
        <p className="w-1/4">Parent Pop:</p>
        <select {...register("pop_name")} className="w-2/4 border-2 px-2">
          {pops.map((p, i) => (
            <option value={p.name} key={i}>
              {p.name}
            </option>
          ))}
        </select>
        <button
          onClick={loadPop}
          className="w-1/4 bg-green-500 text-white px-2 rounded-md"
        >
          Load Pops
        </button>
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Mdf No</p>
        <input
          {...register("mdf_no", { required: true })}
          className="border-2 px-2 w-3/4"
          type={"number"}
          max={999}
          min={1}
        />
      </div>
      <div className="flex">
        <p className="w-1/4"></p>
        {errors.mdf_no && (
          <p className="w-3/4 text-red-600">This field is required</p>
        )}
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">How many cores ?:</p>
        <select {...register("mdf_cores")} className="w-3/4 border-2 px-2">
          {MDF_CORES.map((m, i) => (
            <option value={m} key={i}>
              {m} cores
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Physical address:</p>
        <input
          {...register("physical_address")}
          className="border-2 px-2 w-3/4"
        />
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Maps Lat, Lng</p>
        <input
          {...register("lat_lng")}
          className="border-2 px-2 w-3/4"
          placeholder="(11.562232003357408, 104.92629065348817)"
        />
      </div>
    </>
  );
};
