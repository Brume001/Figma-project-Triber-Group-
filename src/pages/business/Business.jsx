import React from "react";
import "./business.css";
import Businessx from './Businessx';



const Business = () => {
    return(
        <section className="work-section">
            <div className="busi-section">
                <h1>Our Business</h1>
                <span>
                    <a href="">Home</a>
                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    Our business
                </span>
            </div>
            <Businessx/>
            <div className="cta">
                <div className="cta-section">
                    <div className="cta-text">
                        <h2>
                            Interested? Let's get in touch.
                        </h2>
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quasi quisquam  <br /> obcaecati consequatur vitae? Facilis?</p>
                    </div>
                    <div className="cta-button">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business