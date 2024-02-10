import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Feature from "../../components/Feature/Feature";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./Home.css";
import FeatureProperty from "../../components/FeatureProperty/FeatureProperty";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="homeContainer">
          <Feature />
          <div className="browser">
            <h1>Browse by property type</h1>
            <PropertyList />
          </div>
          <div className="guests">
            <h1>Homes guests love</h1>
            <FeatureProperty />
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
