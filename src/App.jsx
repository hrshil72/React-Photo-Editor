import React, { useState } from "react";
import Image from "./components/Image";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

const filters = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturation",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },

  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

const App = () => {
  let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  let [option, setOptions] = useState(filters);
  const selectedOption = option[selectedOptionIndex];

  return (
    <div className="container">
      <Image />
      <Sidebar
        option={option}
        active={selectedOptionIndex}
        selected={setSelectedOptionIndex}
      />
      <Slider />
    </div>
  );
};

export default App;
