import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="property">
      <div className="propertyItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="propertyTitle">
          <h1>Hotels</h1>
          <span>233 hotels</span>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="propertyTitle">
          <h1>Apartments</h1>
          <span>2331 hotels</span>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyTitle">
          <h1>Resorts</h1>
          <span>2330 hotels</span>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyTitle">
          <h1>Villas</h1>
          <span>2340 hotels</span>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyTitle">
          <h1>Cabins</h1>
          <span>2200 hotels</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
