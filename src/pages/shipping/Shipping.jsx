import React from "react";
import "./shipping.css";
import shipimg from "../../assets/ship.jpg"


const Shipping = () => {
    return(
        <section className="ship-section">
            <div className="busi-section">
                <h1>Shipping</h1>
                <span><a href="">Home</a></span> 
                <span className="busi-text">Shipping</span>
            </div>

            <div className="service-text">
                <div className="text">
                    <h3>
                    Seaborne transportation in the oil tanker segment <br /> is an integral part of our business. We provide <br /> chartering solutions to oil majors, independent <br /> producers and trading houses, upholding our <br /> values of protection of the environment and lives <br /> at sea.
                </h3>
                    <br />
                    <br />
                <p>

                    Whether its call-off orders, term contracts or spot supplies, our team not only <br />                     demonstrate a deep understanding of the peculiarities of the regional supply chain <br />                     and seamlessly close logistical gaps, we leverage on our global reach with an <br />                     adaptive approach to real time variables, controlling the unpredictable, minimize its <br /> impact and help our clients navigate with more ease, thereby optimizing their <br /> operational efficiency. 
                </p>
                </div>
            </div>

            <div className="shipimg">
                <img src={shipimg} alt="" />
            </div>

            <div className="cta-shi">
                <div className="cta-shi-section">
                    <div className="cta-shi-text">
                        <h2>
                            Interested? Let's get in touch.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae praesentium ea vel est, mollitia quo animi.
                        </p>
                    </div>
                    <div className="cta-btton">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shipping;