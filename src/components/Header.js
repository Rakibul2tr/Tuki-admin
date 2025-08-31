import React from "react";
import { HiBars4 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import icon1 from '../Images/cate-1.png'
import icon2 from '../Images/cate-2.png'
import icon3 from '../Images/cate-3.png'
import icon4 from '../Images/cate-4.png'
import icon5 from '../Images/cate-5.png'
import icon6 from '../Images/cate-6.png'
import icon7 from '../Images/cate-7.png'
import icon8 from '../Images/cate-8.png'
import icon9 from '../Images/cate-9.png'
import icon10 from '../Images/cate-10.png'
import icon11 from '../Images/cate-11.png'
import icon12 from '../Images/cate-12.png'
import MyButton from "./MyButton";



const Header = () => {

  return (
    <>
      <header>
        <div>
          <MyButton/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8" >
              <div className="d-flex justify-content-between">
                <div>
                  {/* <div className="category-option">
                    <p><HiBars4 className="bar-icon" /> Categories</p>
                  </div> */}
                  <div className="dropdown">
                    <button
                      className="btn category-option  btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <img className="menu-img" src={menu} alt="" /> */}
                      <HiBars4 className="bar-icon" />
                      <span className="me-5 d-inline-block">
                        Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                          <img src={icon1} alt="" className="cte-ic"/>
                          Watches
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon2} alt="" className="cte-ic"/>
                          Earphone
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon3} alt="" className="cte-ic"/>
                          Headphones
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon4} alt="" className="cte-ic"/>
                        Speakers
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon5} alt="" className="cte-ic"/>
                        Mic & Accessories
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon6} alt="" className="cte-ic"/>
                        Powerbank
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon7} alt="" className="cte-ic"/>
                        Charger & Cable
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon8} alt="" className="cte-ic"/>
                        Computer & Accessories
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon9} alt="" className="cte-ic"/>
                        Smart TV & Accessories
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon10} alt="" className="cte-ic"/>
                        Camera & Accessories
                        </Link>
                      </li>
                      <li className="under under2">
                        <Link className="dropdown-item " to="">
                        <img src={icon11} alt="" className="cte-ic"/>
                        Wifi & Connectivity
                        </Link>
                      </li>
                      <li className="under3">
                        <Link className="dropdown-item " to="">
                        <img src={icon12} alt="" className="cte-ic"/>
                        Others Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-option">
                  <p>Trending</p>
                </div>
                <div className="nav-option">
                  <p>Brands</p>
                </div>
                <div className="nav-option">
                  <p>Featured</p>
                </div>
                <div className="nav-option">
                  <p>Customer Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
