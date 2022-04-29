import { useFormContext } from "react-hook-form";
export const PopForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="flex space-x-2">
        <p className="w-1/4">Pop No</p>
        <input
          {...register("pop_no", { required: true, min: 1, max: 999 })}
          className="border-2 px-2 w-3/4"
          type={"number"}
        />
      </div>
      <div className="flex">
        <p className="w-1/4"></p>
        {errors.pop_no && (
          <p className="w-3/4 text-red-600">This field is required</p>
        )}
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
