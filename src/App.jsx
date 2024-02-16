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
    property: "saturate",
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

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) {
          return option;
        }
        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = option.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };

  return (
    <div className="container">
      <Image style={getImageStyle()} />
      <Sidebar
        option={option}
        active={selectedOptionIndex}
        selected={setSelectedOptionIndex}
      />
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
};

export default App;
