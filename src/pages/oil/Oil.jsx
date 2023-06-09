import React from "react";
import "./oil.css";
import chart from "../../assets/chart.png";
import cities from "../../assets/cities.png";
import bunkery from "../../assets/bunkery.png";
import canoa from "../../assets/canoaAndLand.png";


const Oil = () => {
    return(
        <main>

                <section className="oil-section">
            <div className="busi-section">
                <h1>Oil Trading</h1>
                <span><a href="">Home</a></span> 
                <span className="busi-text">Oil Trading</span>
            </div>
            <div className="service-text">
                <div className="desc">
                    <p>
                        Triber oil trading activities primarily deals with the <br /> wholesale physical supply of a wide spectrum of <br /> petroleum products including bunkers into West <br /> Africa.
                    </p>
                    <p className="text1">
                        Whether its call-off orders, term contracts or spot supplies, our team not only <br /> demonstrate a deep understanding of the peculiarities of the regional supply chain <br /> and seamlessly close logistical gaps, we leverage on our global reach with an <br /> adaptive approach to real time variables, controlling the unpredictable, minimize its <br /> impact and help our clients navigate with more ease, thereby optimizing their <br /> operational efficiency. 
                    </p>
                    <div className="desc-img">
                        <img src={cities} alt="" />
                        <img src={chart} alt="" />
                    </div>
                </div>
                
            </div>
            <div className="service-text1">
                <div className="subtitle">
                    <h2>
                        Majority of the cargoes are sourced and transported <br /> mainly from hubs in Europe, Asia-Pacific, Lome, <br /> West Africa.
                    </h2>
                    <div className="subtitle-img">
                        <img src={bunkery} alt="" />
                    </div>
                </div>
            </div>
            <div className="bunker">
                <div className="bunkerx">
                    <div className="bunkerx-text">
                        <h2>
                        Triber bunkering capabilities focuses on services <br /> between Abidjan, Douala range, West Africa in <br /> response to the growing demand for stable and <br /> reliable source of high quality bunkers (Fuel oil: <br /> 180cst & 360cst, MDO & MGO) conforming to <br /> ISO 8217: 2005/2170.
                    </h2>
                    <p>
                        The service began with the acquisition and deployment of MT Elizabeth-G Spirit a <br /> 3200dwt, double-hull ocean going bunker barge fitted with a ‘fueltrax’ fuel <br /> management system which comes with a Coriolis flow meters for custody transfer <br /> measurements. Additional safety feature include a shore-based internet enabled <br /> CCTV system. This service is complemented by other marine assets within our <br /> ship management portfolio.
                    </p>
                    </div>
                </div>
            </div>
            <div className="subtitle-img1">
                        <img src={canoa} alt="" />
                    </div>
            <div className="cta-ship">
                <div className="cta-ship-section mx-4  ">
                    <div className="cta-ship-text ">
                        <h2>
                            Interested? Let's get in touch.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae praesentium ea vel est, mollitia quo animi.
                        </p>
                    </div>
                    <div className="cta-button">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <footer/>
        </section>
        </main>

    )
}

export default Oil;