import React from 'react';
import { useState } from 'react';
import Footerlogoend from '../images/footer-logo.png';
import Material1 from '../images/material-symbols_call-outline.png';
import Material2 from '../images/material-symbols_mail-outline.png';
import Footericon05 from '../images/mingcute_discord-fill.png';
import Footericon06 from '../images/Vector.png';
import Footericon07 from '../images/mingcute_youtube-fill.png';
import Footericon08 from '../images/mingcute_telegram-line.png';
import Footericon09 from '../images/simple-icons_x.png';
const Footer = () => {
   // State to manage the visibility of each section
   const [isSectionOpen, setIsSectionOpen] = useState({
    links1: true,
    links2: false,
    links3: false,
    links4: false
});

// Function to toggle the visibility of a section
const toggleSection = (section) => {
    setIsSectionOpen(prevState => ({
        ...prevState,
        [section]: !prevState[section]
    }));
};
  return (
    <div>
      <footer>
<div class="container">
    <div class="footer-upper">
        <div class="f-contact">
            <div class="footer-logo">
                <img src={Footerlogoend} alt="footer-logo" class="img-fluid" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit.</p>
            <p><img src={Material1} alt="material-symbols_call-outline" /> &nbsp;&nbsp;<a href="tel:+229 91 920447">+229 91 920447</a></p>
            <p><img src={Material2} alt="material-symbols_call-outline" /> &nbsp;&nbsp;<a href="mailto:info@maticrypto.com">info@maticrypto.com</a></p>
        </div>
        <div class="f-links f-links-1">
            <h4>Site Links</h4>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Who we are</a></li>
                <li><a href="#">Wallets</a></li>
                <li><a href="#">NFTs</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <div class="f-links f-links-2">
            <h4>Tutorial</h4>
            <ul>
                <li><a href="#">BNB BEP2 to MoMo</a></li>
                <li><a href="#">Momo to btc</a></li>
                <li><a href="#">MoMo to PM</a></li>
                <li><a href="#">Momo to BNB(BSC/BP20)</a></li>
            </ul>
        </div>
        <div class="f-links f-links-3">
            <h4>Services</h4>
            <ul>
                <li><a href="#">Basic Conversion</a></li>
                <li><a href="#">Pro Conversion</a></li>
                <li><a href="#">Binance direct</a></li>
                <li><a href="#">Latoken direct</a></li>
            </ul>
        </div>
        <div class="f-links f-links-4">
            <h4>Legal</h4>
            <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Legal information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Lexicon</a></li>
            </ul>
        </div>
        <div className="footer-on-sm">
        <div className="f-links f-links-1">
                <h4 onClick={() => toggleSection('links1')}>
                    Site Links
                    <div>{isSectionOpen.links1 ? "-" : "+"}</div>
                </h4>
                <ul style={{ display: isSectionOpen.links1 ? 'block' : 'none' }}>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">Wallets</a></li>
                    <li><a href="#">NFTs</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="f-links f-links-2">
                <h4 onClick={() => toggleSection('links2')}>
                    Tutorial
                   <div> {isSectionOpen.links2 ? "-" : "+"}</div>
                </h4>
                <ul style={{ display: isSectionOpen.links2 ? 'block' : 'none' }}>
                    <li><a href="#">BNB BEP2 to MoMo</a></li>
                    <li><a href="#">Momo to btc</a></li>
                    <li><a href="#">MoMo to PM</a></li>
                    <li><a href="#">Momo to BNB(BSC/BP20)</a></li>
                </ul>
            </div>
            <div className="f-links f-links-3">
                <h4 onClick={() => toggleSection('links3')}>
                    Services
                   <div>{isSectionOpen.links3 ? "-" : "+"}</div>
                </h4>
                <ul style={{ display: isSectionOpen.links3 ? 'block' : 'none' }}>
                    <li><a href="#">Basic Conversion</a></li>
                    <li><a href="#">Pro Conversion</a></li>
                    <li><a href="#">Binance direct</a></li>
                    <li><a href="#">Latoken direct</a></li>
                </ul>
            </div>
            <div className="f-links f-links-4">
                <h4 onClick={() => toggleSection('links4')}>
                    Legal
                    <div>{isSectionOpen.links4 ? "-" : "+"}</div>
                </h4>
                <ul style={{ display: isSectionOpen.links4 ? 'block' : 'none' }}>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Legal information</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Lexicon</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="footer-lower">
    <div class="container d-flex justify-content-between align-items-center">
        <p>Copyright © 2018-2024 Maticrypto. All Rights Reserved </p>
        <ul>
            <li><a href="#"><img src={Footericon08} alt="mingcute_telegram-line" /></a></li>
            <li><a href="#"><img src={Footericon09} alt="simple-icons_x" /></a></li>
            <li><a href="#"><img src={Footericon07} alt="mingcute_youtube-fill" /></a></li>
            <li><a href="#"><img src={Footericon05} alt="mingcute_discord-fill" /></a></li>
            <li><a href="#"><img src={Footericon06} alt="Vector" /></a></li>
        </ul>
    </div>
</div>
</footer>

    </div>
  )
}

export default Footer
