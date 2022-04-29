const TextToSVG = require("text-to-svg");
const textToSVG = TextToSVG.loadSync();

const attributes = { fill: "red", stroke: "black" };
const options = {
  x: 0,
  y: 0,
  fontSize: 18,
  anchor: "top",
  attributes: attributes,
};

module.exports = {
  beforeCreate(event) {
    let svg_path = textToSVG.getD(event.params.data.name, options);
    event.params.data.svg = svg_path;
  },
  beforeUpdate(event) {
    let svg_path = textToSVG.getD(event.params.data.name, options);
    event.params.data.svg = svg_path;
  },
};
