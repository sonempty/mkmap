import { useForm, FormProvider } from "react-hook-form";
import LocationSelect from "../Form/components/Location";
import { getMany } from "../../utils/fetch";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

const SHOW_TYPES = ["boxes", "pops", "mdfs"];
const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

function genInforWindowPorts(name, ports) {
  const arr4 = chunkArray(ports, 4);
  let contentHtml = arr4
    .map((arr) => {
      return (
        '<div class="infor-div-4">' +
        arr
          .map((p) => `<div class="port-${p.status}">${p.name}</div>`)
          .join("") +
        "</div>"
      );
    })
    .join("");
  return (
    '<div class="infor-div">' +
    `<p class="object-name">${name}</p>` +
    contentHtml +
    "</div>"
  );
}

export const MapDataFilter = () => {
  const methods = useForm();

  const onSubmit = async (data) => {
    let showType = data.show;
    let points = await getMany(`/${showType}?populate=*`);

    if (!points || !points.length) {
      alert("No Data for this selection!");
      return;
    }
    if (cl) cl.clearMarkers();
    if (markers) deleteMarkers();

    window.map.setOptions({
      center: points[0].lat_lng,
      styles: window.mapStyles[methods.getValues("map_style")],
    });

    window.markers = points.map((p) => {
      let marker;
      if (data.show_style == "cluster") {
        marker = new google.maps.Marker({
          position: p.lat_lng,
          map: window.map,
          title: p.name,
        });
      } else {
        let svgMarker = {
          path: p.svg,
          fillColor: "blue",
          fillOpacity: 1,
          strokeWeight: 0,
          rotation: 0,
          scale: 1,
          anchor: new google.maps.Point(15, 30),
        };
        marker = new google.maps.Marker({
          position: p.lat_lng,
          map: window.map,
          icon: svgMarker,
        });
      }

      if (showType == "boxes") {
        let infowindow = new google.maps.InfoWindow({
          content: genInforWindowPorts(p.name, p.ports),
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });
      }
      return marker;
    });

    cl = new MarkerClusterer({ markers, map });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border-2 p-2 h-full"
      >
        <div className="space-y-2">
          <h1 className="font-bold text-blue-600">Locations Filter</h1>
          <LocationSelect />
          <h1 className="font-bold text-blue-600">Devices Filter</h1>
          <select
            {...methods.register("show")}
            className="w-full border-2 px-2"
          >
            {SHOW_TYPES.map((s, i) => (
              <option value={s} key={i}>
                Show {s}
              </option>
            ))}
          </select>
          <h1 className="font-bold text-blue-600">Showing Styles</h1>
          <select
            {...methods.register("show_style")}
            className="w-full border-2 px-2"
          >
            <option value={"cluster"}>cluster</option>
            <option value={"name"}>Show name</option>
          </select>
          <h1 className="font-bold text-blue-600">Map Styles</h1>
          <select
            {...methods.register("map_style")}
            className="w-full border-2 px-2"
          >
            <option value={"light"}>Light Mode</option>
            <option value={"defaul"}>Default</option>
            <option value={"dark"}>Dark Mode</option>
            <option value={"blue"}>Blue Water</option>
          </select>
        </div>
        <div className="mt-12">
          <input
            type="submit"
            value="Load Map"
            className="w-full rounded-md bg-blue-700 p-2 text-white shadow-md"
          />
        </div>
        <div id="legend"></div>
      </form>
    </FormProvider>
  );
};
