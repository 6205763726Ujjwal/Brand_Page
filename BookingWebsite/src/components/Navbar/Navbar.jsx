import "./Navbar.css";
import { MdOutlineStayCurrentLandscape } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { IoCar } from "react-icons/io5";
import { LiaTaxiSolid } from "react-icons/lia";
import { CgCalendarDates } from "react-icons/cg";
import { FaChild } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function update() {
    setOpenDate((openDate) => !openDate);
  }

  const navigate = useNavigate();

  function handleOption(name, operation) {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  }
  function updation() {
    setOpenOption((openOption) => !openOption);
  }

  function handleSearch() {
    navigate("/hotel", { state: { destination, date, option } });
  }

  return (
    <>
      <div className={type === "list" ? "lifetimes" : "navs"}>
        <nav className="sub_container">
          <div className="TopNav">
            <h1>LamaBooking</h1>
            <div className="btns">
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
          <div className="items">
            <div className="flex">
              <div className="item circle">
                <MdOutlineStayCurrentLandscape />
                <span>Stays</span>
              </div>
              <div className="item">
                <MdFlight />
                <span>Flights</span>
              </div>
              <div className="item">
                <IoCar />
                <span>Car rentals</span>
              </div>
              <div className="item">
                <MdOutlineStayCurrentLandscape />
                <span>Attractions</span>
              </div>
              <div className="item">
                <LiaTaxiSolid />
                <span>Airports Taxis</span>
              </div>
            </div>
          </div>

          {type !== "list" && (
            <>
              {/* <div className={type === "list" ? "lifetimes" : "lifetime"}> */}
              <div className="lifetime">
                <h1>A lifetime of discounts? It's Genius.</h1>
                <p>
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free Lamabooking account.
                </p>
                <button>Sign in / Register</button>
              </div>
              <div className="header">
                <div className="headers">
                  <div className="input">
                    <MdOutlineStayCurrentLandscape />
                    <input
                      onChange={(e) => setDestination(e.target.value)}
                      type="text"
                      placeholder="Where are you going ?"
                    />
                  </div>
                  <div className="date">
                    <CgCalendarDates />
                    <p onClick={update}>
                      <span>{`${format(
                        date[0].startDate,
                        "MM/dd/yyyy"
                      )}`}</span>{" "}
                      to{" "}
                      <span>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    </p>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="dates"
                      />
                    )}
                  </div>
                  <div className="adult">
                    <FaChild />
                    <p onClick={updation}>
                      <span> {`${option.adult}`} adult </span>
                      <span> {`${option.children}`} children </span>
                      <span> {`${option.room}`} room </span>
                    </p>
                    {openOption && (
                      <div className="option">
                        <div className="options">
                          <div className="optionItem">
                            <span>Adult</span>
                            <div className="btn">
                              <button
                                disabled={option.adult < 1}
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <p>{option.adult}</p>
                              <button
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <span>Children</span>
                            <div className="btn">
                              <button
                                disabled={option.children < 1}
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <p>{option.children}</p>
                              <button
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <span>Room</span>
                            <div className="btn">
                              <button
                                disabled={option.room < 1}
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <p>{option.room}</p>
                              <button onClick={() => handleOption("room", "i")}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button onClick={handleSearch}>search</button>
                </div>
              </div>
              {/* </div> */}
            </>
          )}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
