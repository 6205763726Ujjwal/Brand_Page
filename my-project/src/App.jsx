import React from "react";

const App = () => {
  return (
    <>
      <div className="product_page">
        <nav>
          <div className="header">
            <div className="brand_logo">
              <img src="/Image/brand_logo.png" alt="nike" />
            </div>
            <ul>
              <li>Menu</li>
              <li>Location</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="btn">
              <button type="button">Login</button>
            </div>
          </div>
        </nav>
        <div className="Hero_section">
          <div className="content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>

            <div className="bttn">
              <button className="diff">Shop Now</button>
              <button className="cat">Category</button>
            </div>
            <div className="icons">
              <p>Also Available On</p>
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-amazon"></i>
              </div>
            </div>
          </div>
          <div className="img_section">
            <img src="/Image/shoe_image.png" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
