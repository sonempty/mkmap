import { useFormContext, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import { getMany } from "../../../utils/fetch";
import { getPostalCode } from "./cambodia";

const OLT_MODELS = ["G320", "E320", "GC08", "GC16"];
const PORT_STATUS = [
  "FREE",
  "USED",
  "BOOKING",
  "EXPRIED",
  "BROKEN",
  "ARCHIVED",
];

function genPort(model = "G320") {
  let ports = [];
  switch (model) {
    case "G320":
      for (let i = 0; i < 8; i++)
        ports.push({ name: `C1P${i + 1}`, to: "", status: PORT_STATUS[0] });
      for (let i = 0; i < 8; i++)
        ports.push({ name: `C2P${i + 1}`, to: "", status: PORT_STATUS[0] });
      break;
    case "E320":
      for (let i = 0; i < 8; i++)
        ports.push({ name: `C1P${i + 1}`, to: "", status: PORT_STATUS[0] });
      for (let i = 0; i < 8; i++)
        ports.push({ name: `C2P${i + 1}`, to: "", status: PORT_STATUS[0] });
      break;
    case "GC08":
      for (let i = 0; i < 8; i++)
        ports.push({ name: `C0P${i + 1}`, to: "", status: PORT_STATUS[0] });
      break;
    case "GC16":
      for (let i = 0; i < 16; i++)
        ports.push({ name: `C0P${i + 1}`, to: "", status: PORT_STATUS[0] });
      break;
    default:
      break;
  }
  return ports;
}

export const OltForm = () => {
  const [pops, setPops] = useState([]);
  const {
    register,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ports",
  });

  const loadPop = async (e) => {
    e.preventDefault();
    let [province, khan, sangkat] = getValues(["province", "khan", "sangkat"]);
    let postal_code = getPostalCode(province, khan, sangkat);

    getMany(`\/pops?filters[postal_code][$eq]=${postal_code}`).then((pops) => {
      let new_pops = pops.filter((p) => p.postal_code == postal_code);
      if (new_pops) {
        setValue("pop_name", new_pops[0].name);
        setPops(new_pops);
      }
    });
  };

  const handleOltModel = (e) => {
    e.preventDefault();
    let model = e.target.value;
    let newPorts = genPort(model);
    console.log(model, newPorts);
    setValue("ports", newPorts);
  };

  useEffect(() => setValue("ports", genPort("G320")), []);
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
        <p className="w-1/4">Olt No</p>
        <input
          {...register("olt_no", { required: true })}
          className="border-2 px-2 w-3/4"
          type={"number"}
          max={99}
          min={1}
        />
      </div>
      <div className="flex">
        <p className="w-1/4"></p>
        {errors.olt_no && (
          <p className="w-3/4 text-red-600">This field is required</p>
        )}
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Olt's Type:</p>
        <select
          {...register("olt_model")}
          onChange={handleOltModel}
          className="w-3/4 border-2 px-2"
        >
          {OLT_MODELS.map((m, i) => (
            <option value={m} key={i}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2">
        <p className="w-1/4">Olt's ip address:</p>
        <input {...register("ip_address")} className="border-2 px-2 w-3/4" />
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
