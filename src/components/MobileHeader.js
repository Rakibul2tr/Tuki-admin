import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { MdClose, MdOutlineAdsClick, MdAnimation, MdNotificationAdd, MdCurrencyExchange, MdFilterFrames } from "react-icons/md";
import { FaSellcast } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaRegGem, FaUsers, FaGift, FaHistory, FaCcMastercard, FaUserAstronaut } from "react-icons/fa";
import logo from "../Images/logo.png";
import { AiFillDashboard } from "react-icons/ai";
import { LuPackagePlus } from "react-icons/lu";
import { IoIosChatbubbles, IoIosTime } from "react-icons/io";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false); // Close the menu
  };
  const goTo = (path) => {
    setActiveMenu(path); // Update active menu state
    navigate(path); // Navigate to the route
    closeMenu()
  };

  useEffect(() => {
    setActiveMenu(location.pathname); // Update active menu based on the current route
  }, [location.pathname]);

  return (
    <>
      <div className="mobile-header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div onClick={handleShowMenu}>
              {showMenu ? (
                <MdClose className="nav-ico" />
              ) : (
                <HiOutlineBars3 className="nav-ico" />
              )}
            </div>

            <div className="mobile-logo">
              <Link to="/xnet/home">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div>
              <FaUserCircle className="nav-ico" />
              {/* <p style={{ color: "#fff" }}>Search</p> */}
            </div>
          </div>
        </div>
      </div>
      {showMenu && <div className="menu-overlay" onClick={closeMenu}></div>}
      <div>
        <div className={`ApptSlid ${showMenu ? "Appt-slid" : ""}`}>
          <div className="inner-box text-center">
            {/* Menu Items */}
            <div className="appointment-form">
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/home" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/home")}
              >
                <div>
                  <AiFillDashboard
                    className={`opNav-ico ${activeMenu === "/xnet/home" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/home" ? "active-text" : ""
                    }`}
                >
                  Dashboard
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/users" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/users")}
              >
                <div>
                  <FaUsers
                    className={`opNav-ico ${activeMenu === "/xnet/users" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/users" ? "active-text" : ""
                    }`}
                >
                  Users
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/package" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/package")}
              >
                <div>
                  <IoDocumentsSharp
                    className={`opNav-ico ${activeMenu === "/xnet/package" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/package" ? "active-text" : ""
                    }`}
                >
                  VVIP Package
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/vip-package" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/vip-package")}
              >
                <div>
                  <IoDocumentsSharp
                    className={`opNav-ico ${activeMenu === "/xnet/vip-package" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/vip-package" ? "active-text" : ""
                    }`}
                >
                  VIP Package
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/daimond" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/daimond")}
              >
                <div>
                  <FaRegGem
                    className={`opNav-ico ${activeMenu === "/xnet/daimond" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/daimond" ? "active-text" : ""
                    }`}
                >
                  Daimond
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/gift" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/gift")}
              >
                <div>
                  <FaGift
                    className={`opNav-ico ${activeMenu === "/xnet/gift" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/gift" ? "active-text" : ""
                    }`}
                >
                  Gift
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/agency" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/agency")}
              >
                <div>
                  <MdOutlineAdsClick
                    className={`opNav-ico ${activeMenu === "/xnet/agency" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/agency" ? "active-text" : ""
                    }`}
                >
                  Agency
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/reseller" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/reseller")}
              >
                <div>
                  <FaSellcast
                    className={`opNav-ico ${activeMenu === "/xnet/reseller" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/reseller" ? "active-text" : ""
                    }`}
                >
                  Reseller
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/moderator" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/moderator")}
              >
                <div>
                  <FaUserAstronaut
                    className={`opNav-ico ${activeMenu === "/xnet/moderator" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/moderator" ? "active-text" : ""
                    }`}
                >
                  Moderator
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/Percentage" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/Percentage")}
              >
                <div>
                  <MdCurrencyExchange
                    className={`opNav-ico ${activeMenu === "/xnet/Percentage" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/Percentage" ? "active-text" : ""
                    }`}
                >
                  Percentage
                </p>
              </div>
              {/* <div
                  className={`navOptionSlide ${
                    activeMenu === "/xnet/exchange-rate" ? "activeOP" : ""
                  }`}
                  onClick={() => goTo("/xnet/exchange-rate")}
                >
                  <div>
                    <MdCurrencyExchange 
                      className={`opNav-ico ${
                        activeMenu === "/xnet/exchange-rate" ? "active-icon" : ""
                      }`}
                    />
                  </div>
                  <p
                    className={`ms-2 opNav ${
                      activeMenu === "/xnet/exchange-rate" ? "active-text" : ""
                    }`}
                  >
                    Exchange rate
                  </p>
                </div> */}
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/animation" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/animation")}
              >
                <div>
                  <MdAnimation
                    className={`opNav-ico ${activeMenu === "/xnet/animation" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/animation" ? "active-text" : ""
                    }`}
                >
                  Animation
                </p>
              </div>


              {/* <div
                  className={`navOptionSlide ${
                    activeMenu === "/xnet/package-purchase" ? "activeOP" : ""
                  }`}
                  onClick={() => goTo("/xnet/package-purchase")}
                >
                  <div>
                    <LuPackagePlus 
                      className={`opNav-ico ${
                        activeMenu === "/xnet/package-purchase" ? "active-icon" : ""
                      }`}
                    />
                  </div>
                  <p
                    className={`ms-2 opNav ${
                      activeMenu === "/xnet/package-purchase" ? "active-text" : ""
                    }`}
                  >
                    Package Purchase
                  </p>
                </div> */}
              {/* <div
                  className={`navOptionSlide ${
                    activeMenu === "/xnet/withdraw-requests" ? "activeOP" : ""
                  }`}
                  onClick={() => goTo("/xnet/withdraw-requests")}
                >
                  <div>
                    <FaCcMastercard  
                      className={`opNav-ico ${
                        activeMenu === "/xnet/withdraw-requests" ? "active-icon" : ""
                      }`}
                    />
                  </div>
                  <p
                    className={`ms-2 opNav ${
                      activeMenu === "/xnet/withdraw-requests" ? "active-text" : ""
                    }`}
                  >
                    Withdraw Requests
                  </p>
                </div> */}
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/user-chat" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/user-chat")}
              >
                <div>
                  <IoIosChatbubbles
                    className={`opNav-ico ${activeMenu === "/xnet/user-chat" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/user-chat" ? "active-text" : ""
                    }`}
                >
                  User Chat
                </p>
              </div>
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/calling-hour" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/calling-hour")}
              >
                <div>
                  <IoIosTime
                    className={`opNav-ico ${activeMenu === "/xnet/calling-hour" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/calling-hour" ? "active-text" : ""
                    }`}
                >
                  Calling Hour
                </p>
              </div>
              {/* <div
                  className={`navOptionSlide ${
                    activeMenu === "/xnet/send-history" ? "activeOP" : ""
                  }`}
                  onClick={() => goTo("/xnet/send-history")}
                >
                  <div>
                    <FaHistory
                      className={`opNav-ico ${
                        activeMenu === "/xnet/send-history" ? "active-icon" : ""
                      }`}
                    />
                  </div>
                  <p
                    className={`ms-2 opNav ${
                      activeMenu === "/xnet/send-history" ? "active-text" : ""
                    }`}
                  >
                    Send History
                  </p>
                </div> */}
              <div
                className={`navOptionSlide ${activeMenu === "/xnet/notification" ? "activeOP" : ""
                  }`}
                onClick={() => goTo("/xnet/notification")}
              >
                <div>
                  <MdNotificationAdd
                    className={`opNav-ico ${activeMenu === "/xnet/notification" ? "active-icon" : ""
                      }`}
                  />
                </div>
                <p
                  className={`ms-2 opNav ${activeMenu === "/xnet/notification" ? "active-text" : ""
                    }`}
                >
                  Notification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;