import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";

import logo1 from "../../images/Anti Virus 32.png";
import logo2 from "../../images/Book 32.png";
import logo3 from "../../images/API32.png";
import logo4 from "../../images/Box 32.png";


import image1 from "../../images/Capture.png";
import image2 from "../../images/Capture.png";
import image3 from "../../images/Capture.png";





const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="logos">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo1} alt="logo1" />
            </div>
            <div className="col-md-3">
              <img src={logo2} alt="logo2" />
            </div>
            <div className="col-md-3">
              <img src={logo3} alt="logo3" />
            </div>
            <div className="col-md-3">
              <img src={logo4} alt="logo4" />
            </div>
          </div>
        </div>
      </section> 

      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={image1} alt="img1" />
            </div>
            <div className="col-md-6">
              <h2>About us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button>
                <a href="#about">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <h2>Services</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button>
                <a href="#about">learn more</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={image2} alt="img2" />
            </div>

          </div>
        </div>
      </section>

<section className="whychooseus">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={image3} alt="img3" />
            </div>
            <div className="col-md-6">
              <h2>WHY CHOOSE US?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button>
                <a href="#about">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
 
    

      

    </Fragment>
  );
};

export default Home;
