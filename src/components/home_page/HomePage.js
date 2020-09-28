import React from "react";

import { whatWeDoBody, regionalFranchise } from "./homeData";
import "./home-style.css";
import WhyProcredita from "./WhyProcredita";

function HomePage() {
  return (
    <div className="homepage">
      <div className="services">
        <div className="what-we-do">
          <div className="what-we-do__title">
            We provide a comprehensive debt collection service
          </div>
          <div className="what-we-do__body">{whatWeDoBody}</div>
          <div className="what-we-do__btns">
            <button>Hire Us</button>

            <div className="what-we-do-btn__two">
              <span></span>
              <span>Watch the Video</span>
            </div>
          </div>
        </div>
        <div className="service__img-box"></div>
      </div>
      <WhyProcredita />
      <div className="regional-franchise">
        <div className="regional-franchise__title">
          <span></span>
          <span>Own a Procredita Regional Franchise</span>
        </div>
        <div className="regional-franchise__bdy">
          <div className="img-cont"></div>
          <div className="regional-franchise-bdy_txt">
            <div>{regionalFranchise}</div>
            <div>Become a Debt Collection Manager</div>
            <div className="signup-btn">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
