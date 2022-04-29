import { useFormContext, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import { findAllObject } from "../../../utils/fetch";
import { getPostalCode } from "./cambodia";

const BOX_CORES = [8, 16];
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
    ports.push({ name: `P${i + 1}`, to: "", status: PORT_STATUS[0] });
  return ports;
}

export const BoxForm = () => {
  const [mdfs, setmdfs] = useState([]);
  const { register, getValues, setValue, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ports",
  });

  const loadMdf = async (e) => {
    e.preventDefault();
    let [province, khan, sangkat] = getValues(["province", "khan", "sangkat"]);
    let postal_code = getPostalCode(province, khan, sangkat);

    findAllObject("mdf").then((mdfs) => {
      let new_mdfs = mdfs.filter((m) => m.postal_code == postal_code);
      if (new_mdfs) {
        setValue("mdf_name", new_mdfs[0].name);
        setmdfs(new_mdfs);
      }
    });
  };

  const handleBoxCores = (e) => {
    e.preventDefault();
    let cores = e.target.value;
    let newPorts = genPort(cores);
    setValue("ports", newPorts);
  };

  useEffect(() => setValue("ports", genPort(8)), []);
  return (
    <>
      <div className="flex space-x-2">
        <p className="w-1/4">Parent Mdf:</p>
        <select {...register("mdf_name")} className="w-2/4 border-2 px-2">
          {mdfs.map((m, i) => (
            <option value={m.name} key={i}>
              {m.name}
            </option>
          ))}
        </select>
        <button
          onClick={loadMdf}
          className="w-1/4 bg-green-500 text-white px-2 rounded-md"
        >
          Load Mdfs
        </button>
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Box No</p>
        <input
          {...register("box_no")}
          className="border-2 px-2 w-3/4"
          type={"number"}
          max={999}
          min={1}
        />
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Box's Type:</p>
        <select
          {...register("cores")}
          onChange={handleBoxCores}
          className="w-3/4 border-2 px-2"
        >
          {BOX_CORES.map((c, i) => (
            <option value={c} key={i}>
              Box {c} ports
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
      <p className="font-bold text-blue-600 pt-4">Ports Config &#8594;</p>
      {fields.map((item, index) => (
        <div key={item.id} className="flex space-x-4 px-2">
          <div className="flex-1 flex space-x-4">
            <input
              {...register(`ports.${index}.name`)}
              className="w-full border-2 px-2"
            />
            <input
              {...register(`ports.${index}.to`)}
              className="w-full border-2 px-2"
            />
            <select
              {...register(`ports.${index}.status`)}
              className="border-2 px-2"
            >
              {PORT_STATUS.map((status) => (
                <option key={status} value={status} className="px-2">
                  {status}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="bg-gray-400 hover:bg-red-300 text-white rounded-sm px-2 py-1"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="py-4 flex justify-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            append({ name: "", to: "", status: "FREE" });
          }}
          className="bg-blue-300 rounded-md shadow-md hover:bg-blue-500 px-4 py-1"
        >
          Add Port
        </button>
      </div>
    </>
  );
};
