import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroWrapper">
        <div className="heroItem">
          <div className="heart">
            <h1>Stay in the heart of City</h1>
            <p className="walk">
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a fully
              equipped kitchenette with a microwave, a flat-screen TV, and a
              private bathroom with shower and a hairdryer. A fridge is also
              offered, as well as an electric tea pot and a coffee machine.
              Popular points of interest near the apartment include Cloth Hall,
              Main Market Square and Town Hall Tower. The nearest airport is
              John Paul II International Kraków–Balice, 16.1 km from Tower
              Street Apartments, and the property offers a paid airport shuttle
              service.
            </p>
          </div>
          <div className="hearts">
            <h5>Perfect for a 9-night stay!</h5>
            <p className="real">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <h1>
              $945 <span> (9 nights)</span>
            </h1>
            <button>Rerserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
