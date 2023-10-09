import React from "react";
import "./Footer.css";
import { MdHomeWork } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <span
            className="secondaryText"
            style={{ fontWeight: "bold", fontSize: "25px", color: "#87CEEB" }}
          >
            <MdHomeWork color="#1FBED6" />
            &nbsp;Sky Real
          </span>
          <span className="secondaryText">
            2023 @ All Rights Reserved - Althaf Kv <br />
          </span>
        </div>

        <div className="flexColStart f-right">
          <h2>Contact us</h2>
          <span className="secondaryText">
            <BiMailSend size={18} />
            &nbsp;althafwayanad@gmail.com
          </span>
          <div className="flexCenter f-menu">
            <Link to="/bookings">Bookings</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/aboutus">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
