import React, { useState, useEffect } from "react";

// Component
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Storage from "./components/Storage";

// import APIUsageExample from "./APIUsageExample";
import APIUsageExample from "./APIUsageExample.v2";

const App = () => {
  return (
    <>
      {/* Turn this on for testing API usage */}
      {/* <APIUsageExample /> */}
      <Map />
      <Navbar />
      <Storage />
    </>
  );
};

export default App;
