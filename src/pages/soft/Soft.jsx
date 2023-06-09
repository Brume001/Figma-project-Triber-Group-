import React from "react";
import "./soft.css";
import cocoa from "../../assets/cocoa.png"
import cocoamilk from "../../assets/cocoaMilk.png"
import cocoagarden from "../../assets/cocoaGarden.png"
import cocoatree from "../../assets/cocoaTree.png"
import grainfield from "../../assets/grainfield.png"


const Soft = () => {
    return(
            <section className="soft-section">
                <div className="busi-section">
                    <h1>Soft Commodity</h1>
                    <span><a href="">Home</a></span> 
                <span className="busi-text">Soft Commodity</span>
                </div>
                <div className="section-text2">
                    <div className="text2">
                        <p>
                            Triber soft commodity team <br /> offers full service and <br /> advisory from origination, <br /> storage to trading.
                        </p>
                    </div>
                </div>
                    <p className="text3">
                        Our insight and understanding of the mechanics of the commodity supply <br /> chain underpins our well established access and logistics of farm gate supply <br /> to the domestic and global markets. The intermediary role connects farmers <br /> and industrial consumers of a narrow but growing range of crops from cocoa, <br /> coffee, cassava to maize.
                    </p>
                    <div className="image1">
                        <img src={grainfield} alt="" />
                        <img src={cocoa} alt="" />
                        <img src={cocoatree} alt="" />
                    </div>
                    <div className="image2">
                        <img src={cocoamilk} alt="" />
                        <img src={cocoagarden} alt="" />
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

export default Soft;