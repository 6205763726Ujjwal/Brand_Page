import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaMapMarker } from "react-icons/fa";
import "./List.css";
import Photo from "../../components/Photo/Photo";
import HeroSection from "../../components/HeroSection/HeroSection";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const List = () => {
  return (
    <div className="">
      <Navbar type="list" />
      <div className="list">
        <div className="listItemWrapper">
          <div className="listItem">
            <div className="listItems">
              <h1>Tower Street Apartments</h1>
              <div className="map">
                <FaMapMarker className="icon" />
                <p>Elton St 125 New york</p>
              </div>
              <p className="location">Excellent location – 500m from center</p>
              <p className="book">
                Book a stay over $114 at this property and get a free airport
                taxi
              </p>
            </div>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
        <Photo />
        <HeroSection />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default List;
