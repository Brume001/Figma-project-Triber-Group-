import React from "react";
import "./procure.css";
import procure from "../../assets/project mang.jpg"
import procurem from "../../assets/procure.cycle.png"


const Procure = () => {
    return(
            <section className="pro-section">
            <div className="busi-section">
                <h1>Procurement</h1>
                <span><a href="">Home</a></span> 
                <span className="busi-text">Procurement</span>
            </div>
            <div className="service-textp">
                <div className="txt-img1">
                    <div className="txt1">
                        <h3>
                            We advise and provide sourcing <br /> solutions that help reduce supply <br /> risks and improve supply chain <br /> efficiencies in the rail, oil & gas <br /> markets in Nigeria.
                        </h3> 
                        <p>
                            Our team consists of sourcing, contracting and logistic <br /> specialists with extensive experience allowing us to <br /> deliver a single source, end-to-end procurement <br /> solutions of capital goods and equipment <br /> procurement management.
                        </p>
                    </div>
                    <div className="img">
                        <img src={procure} alt="" />
                    </div>
                </div>
                <div className="txt-img2">
                    <div className="img2">
                        <img src={procurem} alt="" />
                    </div>
                    <div className="txt2">
                        <h3>
                            Options range from strategic sourcing, tendering, <br /> contracts management to materials management.
                        </h3> 
                        <p>
                            Our market knowledge and global sourcing <br /> network has consistently over the years delivered <br /> value to our clients. We build resiliency and <br /> flexibility into your supply chain and offer you long <br /> term support to ensure your processes remain <br /> effective. 
                        </p>
                    </div>

                </div>
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

export default Procure;