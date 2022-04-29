import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { LOCATION_DATA } from "./cambodia";

function getProvinces() {
  return LOCATION_DATA.filter(
    (item) => item.khan == "all" && item.sangkat == "all"
  ).map((item) => item.province);
}
function getKhans(province) {
  return LOCATION_DATA.filter(
    (item) => item.sangkat == "all" && item.province == province
  ).map((item) => item.khan);
}

function getSangkats(khan) {
  return LOCATION_DATA.filter((item) => item.khan == khan).map(
    (item) => item.sangkat
  );
}
const DEFAULT_PROVINCE = "Phnom Penh";

export default function LocationSelect() {
  const { register, setValue } = useFormContext({
    defaultValues: {
      province: DEFAULT_PROVINCE,
      khan: "all",
      sangkat: "all",
      code: "120000",
    },
  }); // retrieve all hook methods

  const [khans, setKhans] = useState(getKhans(DEFAULT_PROVINCE));
  const [sangkats, setSangkats] = useState(["all"]);

  const handleProvince = (e) => {
    let value = e.target.value;
    setValue("khan", "all");
    setValue("sangkat", "all");
    setKhans(getKhans(value));
  };
  const handleKhan = (e) => {
    let value = e.target.value;
    setValue("sangkat", "all");
    setSangkats(getSangkats(value));
  };

  return (
    <>
      <select
        {...register("province")}
        onChange={handleProvince}
        className="w-full border-2 px-2"
      >
        {getProvinces().map((p, i) => (
          <option value={p} key={i}>
            {p}
          </option>
        ))}
      </select>
      <select
        {...register("khan")}
        onChange={handleKhan}
        className="w-full border-2 px-2"
      >
        {khans.map((k, i) => (
          <option value={k} key={i}>
            {k}
          </option>
        ))}
      </select>
      <select {...register("sangkat")} className="w-full border-2 px-2">
        {sangkats.map((s, i) => (
          <option value={s} key={i}>
            {s}
          </option>
        ))}
      </select>
    </>
  );
}
