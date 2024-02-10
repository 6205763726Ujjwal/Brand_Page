import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="rightBar">
      <div className="leftSec">
        <div className="imgSec">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt="1"
            className=""
          />
        </div>
      </div>
      <div className="rightSec">
        <div className="textSec">
          <h1>Tower Street Apartments</h1>
          <p>500m from center</p>
          <p className="airport">Free airport taxi</p>

          <div className="apartment">
            <p className="studio">Studio Apartment with Air conditioning</p>
            <p className="entire">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </p>
            <p className="free">Free cancellation</p>
            <p className="cancel">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        </div>
        <div className="excellents">
          <div className="excellent">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="dollar">
            <h5>$112</h5>
            <p>Includes taxes and fees</p>
            <button>See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
