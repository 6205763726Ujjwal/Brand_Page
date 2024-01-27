import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeaderContact from "./components/Header/HeaderContact";
import FormHandle from "./components/FormHandle/FormHandle";
const App = () => {
  return (
    <div>
      <Navigation />
      <div className={StyleSheet.main_container}>
        <HeaderContact />
        <FormHandle />
      </div>
    </div>
  );
};

export default App;
            






