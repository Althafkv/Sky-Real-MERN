import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <div className="paddings flexCenter properties">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
            consequuntur ducimus odit totam vel earum eius obcaecati eos fugiat
            ab, aliquam porro eligendi nostrum itaque, ut consequatur corrupti
            deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia eaque odit officiis cumque? Praesentium eius harum porro
            temporibus velit. Repellendus at vero eveniet iure deserunt ad
            possimus dolorum a eligendi? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos reiciendis modi id, sunt, odit earum rerum
            sequi quibusdam commodi nihil qui sint fugit ab consequuntur. Saepe,
            deleniti pariatur. Maxime, accusamus. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            unde, ducimus quaerat voluptatibus saepe dolorum maiores architecto
            nam, obcaecati nemo corrupti deleniti quae recusandae? Nihil dolorem
            sunt corporis soluta dolore. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo expedita consectetur maxime sequi incidunt
            corporis quos quam nisi ipsum quidem unde excepturi eligendi debitis
            possimus fugiat impedit, facilis rem deleniti? <br /> <br /> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Rerum eos cumque
            quaerat iste nihil odit saepe. Saepe delectus maxime eius mollitia
            fuga dolorem, beatae nostrum molestias odit voluptatibus vel vitae.
          </p>
          <Link to="/" className="button">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
