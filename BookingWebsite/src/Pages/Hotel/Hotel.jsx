import Navbar from "../../components/Navbar/Navbar";
import "./Hotel.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";
import { useState } from "react";
import SearchItem from "../../components/SearchItem/SearchItem";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  function updating() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div>
        <Navbar type="list" />
        <div className="hotelContainer">
          <div className="search">
            <div className="searchWrapper">
              <div className="searchItem">
                <h1>search</h1>
                <div className="destination">
                  <label>Destination</label>
                  <input type="text" placeholder={destination} />
                </div>
                <div className="check">
                  <label>Check-in-Date</label>
                  <p onClick={updating}>{` ${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dates[0].endDate, "MM/dd/yyyy")} `}</p>
                  {isOpen && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />
                  )}
                </div>

                <div className="optioned">
                  <div className="price">
                    <h6>Option</h6>
                    <p>
                      Min price <span> per right</span>
                    </p>
                    <p>
                      Max price <span> per right</span>
                    </p>
                    <p>Adult </p>
                    <p>Children</p>
                    <p>Room</p>
                  </div>
                  <div className="box">
                    <input type="number" placeholder="1" className="number" />
                    <input type="number" placeholder="1" className="number" />
                    <input
                      type="number"
                      placeholder={option.adult}
                      className="number"
                    />
                    <input
                      type="number"
                      placeholder={option.children}
                      className="number"
                    />
                    <input
                      type="number"
                      placeholder={option.room}
                      className="number"
                    />
                  </div>
                </div>
                <button>search</button>
              </div>
            </div>
          </div>
          <div className="repeat">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
