import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotel" element={<Hotel />}></Route>
        <Route path="/hotel/:id" element={<List />}></Route>
      </Routes>
    </>
  );
};
export default App;
