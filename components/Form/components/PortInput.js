import { useFieldArray, useFormContext, Controller } from "react-hook-form";

const PORT_STATUS = [
  "FREE",
  "USED",
  "BOOKING",
  "EXPRIED",
  "BROKEN",
  "ARCHIVED",
];
export default function PortInput() {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ports",
  });

  return (
    <>
      <p className="font-bold text-blue-600 pt-4">
        Ports of this Object &#8594;
      </p>
      {fields.map((item, index) => (
        <div key={item.id} className="flex space-x-4 px-2">
          <div className="flex-1 flex space-x-4">
            <input
              {...register(`ports.${index}.name`)}
              className="w-full border-2 px-2"
            />
            <Controller
              render={({ field }) => (
                <input {...field} className="w-full border-2 px-2" />
              )}
              name={`ports.${index}.to`}
              control={control}
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
      <div className="py-4 content-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            append({ name: "", to: "", status: "FREE" });
          }}
          className="bg-gray-300 rounded-md shadow-md hover:bg-blue-300 px-4 py-1"
        >
          Add Port
        </button>
      </div>
    </>
  );
}
