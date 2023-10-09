import React, { useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import { BiSolidPhoneCall } from "react-icons/bi";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./newpp7.jpg" alt="img" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
            <br />
            All best properties with affordable price.
            <br /> <br />
          </span>
          <span style={{ fontSize: "16px" }} className="secondaryText">
            Book your visit
          </span>
          <span className="phcl">
            <BiSolidPhoneCall />
            &nbsp;+91 7902360099
          </span>
        </div>
      </div>
    </section>
  );
};

export default Value;
