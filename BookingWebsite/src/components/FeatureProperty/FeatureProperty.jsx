import React from "react";
import "./FeatureProperty.css";

const FeatureProperty = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="stare">
          <h1>Aparthotel Stare Miasto</h1>
          <span>Madrid</span>
          <p>Starting from $120</p>
        </div>
        <div className="rate">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <div className="stare">
          <h1>Comfort Suites Airport</h1>
          <span>Austin</span>
          <p>Starting from $140</p>
        </div>
        <div className="rate">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="stare">
          <h1>Four Seasons Hotel</h1>
          <span>Lisbon</span>
          <p>Starting from $99</p>
        </div>
        <div className="rate">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="stare">
          <h1>Hilton Garden Inn</h1>
          <span>Berlin</span>
          <p>Starting from $105</p>
        </div>
        <div className="rate">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
