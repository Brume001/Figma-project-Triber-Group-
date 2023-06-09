import React from "react";
import {Routes, Route} from "react-router-dom";

import "./App.css";
import Business from './pages/business/Business';
import Shipping from "./pages/shipping/Shipping";
import Procure from "./pages/procure/Procure";
import Oil from "./pages/oil/Oil";
import Soft from "./pages/soft/Soft";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FooterLinks from "./components/FooterLinks";
import Navigation from "./components/navigation/Navigation";
import Dropdown from "./components/dropdown/Dropdown";

export default function App() {
    return(
        <>
        <Header/>
        <Navigation/>
        <Dropdown/>

        <Routes>
            <Route path="/" element={<Business/>} />
            <Route path="/oil" element={<Oil/>} />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/procure" element={<Procure/>} />
            <Route path="/soft" element={<Soft/>} />
        </Routes>
        <FooterLinks/>
        <Footer/>

        </>
    ) 
    
}