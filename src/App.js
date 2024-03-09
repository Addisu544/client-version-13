import React, { useState, useEffect } from "react";
import Menu from "./menu/Menu";
import Insert from "./DBoperations/Operations";

function App() {
  return (
    <>
      <Menu />
      <Insert />
    </>
  );
}

export default App;
