import React from "react";
import "./page.css";
import image from "../../images/employer/intrap-logo.png";

const pages = () => {
  return (
    <section className="main-section">
      <div className=" mains-containers  ">
        <div className="mains-cont">
          <div className='image-cont"'>
            <img src={image} alt="React Image" />
          </div>
        </div>
        <div className="new-component">
          <h1 className="headings">
            Retailer or brand looking to reduce packaging waste?
          </h1>
          <p className="para">sgognsiogoirengoi</p>
        </div>
      </div>

      <div className=" mains-containers  ">
        <div className="mains-cont"></div>
      </div>

      <div className=" mains-containers  ">
        <div className="mains-cont">
          <div className='image-cont"'>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              fuga, aliquam facere explicabo molestias ducimus molestiae. Sequi,
              aliquam expedita. Quod minus impedit maiores!
            </h1>
          </div>
        </div>
        <div className="new-component">
          <h1 className="headings">
            Retailer or brand looking to reduce packaging waste?
          </h1>
          <p className="para">sgognsiogoirengoi</p>
        </div>
      </div>
    </section>
  );
};

export default pages;
