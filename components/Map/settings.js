export const mapStyles = {
  default: [],
  light: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ],
  dark: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          saturation: "-100",
        },
        {
          lightness: "30",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          gamma: "0.00",
        },
        {
          lightness: "74",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [
        {
          lightness: "3",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
  ],
  blue: [
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          lightness: "-65",
        },
        {
          saturation: "-100",
        },
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [
        {
          lightness: "-65",
        },
        {
          saturation: "-100",
        },
        {
          gamma: "1",
        },
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          lightness: "-65",
        },
        {
          saturation: "-100",
        },
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: "-100",
        },
        {
          lightness: "-65",
        },
        {
          gamma: "1",
        },
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        {
          color: "#eff1f4",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          hue: "#007dff",
        },
        {
          lightness: "0",
        },
        {
          saturation: "-73",
        },
        {
          gamma: "1",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text",
      stylers: [
        {
          color: "#545454",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: "-87",
        },
        {
          lightness: "-40",
        },
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#f0f0f0",
        },
        {
          saturation: "-22",
        },
        {
          lightness: "-16",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "transit.station.airport",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "transit.station.bus",
      elementType: "labels.text",
      stylers: [
        {
          saturation: "0",
        },
      ],
    },
    {
      featureType: "transit.station.bus",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "transit.station.bus",
      elementType: "labels.icon",
      stylers: [
        {
          hue: "#ff0000",
        },
        {
          saturation: "-59",
        },
      ],
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: "-100",
        },
        {
          lightness: "-83",
        },
        {
          gamma: "1",
        },
        {
          color: "#334e6a",
        },
      ],
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [
        {
          hue: "#ffd600",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: "-52",
        },
        {
          lightness: "-16",
        },
        {
          color: "#02a8b6",
        },
      ],
    },
  ],
};

export const mapSettings = {
  center: { lat: 11.562185903414683, lng: 104.92638569645091 },
  zoom: 12,
  styles: mapStyles.light,
  //disableDefaultUI: true,
};
