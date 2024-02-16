import React from "react";
import Image from "./components/Image";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="container">
      <Image />
      <Sidebar />
      <Sidebar />
      <Slider />
    </div>
  );
};

export default App;
