import './App.css';
import Header from './components/Header-top'; // Assuming your Header component file is named Header.js
import MyTimeline from './components/Timeline.js';
import Footer from './components/Footer.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import RevenueImage from './images/revenue-operation-collage 1.png';
import Propert1 from './images/propert1.png';
import Propert2 from './images/propert2.png';
import Propert3 from './images/propert3.png';
import Bitcoin from './images/bitcoin.png';
import Niger from './images/niger.png';
import Cameroon from './images/cameroon.png';
import Togo from './images/togo.png';
import Mali from './images/mali.png';
import Rdc from './images/rdc.png';
import Faso from './images/faso.png';
import Senegal from './images/senegal.png';
import Guinea from './images/guinea.png';
import Gabon from './images/gabon.png';
import Rwanda from './images/rwanda.png';
import Kenya from './images/kenya.png';
import Customer_support from './images/customer_support.png';
import Person1 from './images/person1.png';
import Person2 from './images/person2.png';
import Person3 from './images/person3.png';
import Secureway from './images/secure-way.png';
import Secureway01 from './images/payment-method.png';
import Crypto1 from './images/BTC - Wrapped BTC.png';
import Crypto2 from './images/XRP - Wrapped XRP.png';
import Crypto4 from './images/TRX - TRON.png';
import Crypto6 from './images/BNB - Binance Coin.png';
import Crypto7 from './images/XMRT - MoneroToken.png';
import Crypto8 from './images/ceUSDT - Tether USD.png';
import Crypto10 from './images/XLM - Stellar.png';
import Crypto11 from './images/BTTOLD - BitTorrent.png';
import Crypto12 from './images/MANA - Decentraland.png';
import Crypto13 from './images/BUSDbsc - BUSD from BSC on Meter.png';
import Crypto14 from './images/EPRO - EthereumPro.png';
import Crypto15 from './images/CAKE - PancakeSwap Token.png';
import Crypto16 from './images/BCH - BNB pegged Bitcoin Cash Token.png';
import Frame_1 from './images/Frame 14.png';
import Frame_user from './images/frame-user.png';
import Frame_location from './images/frame-location.png';
import Shiba from './images/shiba-lnu.png';
import Dogecoin from './images/dogecoin.png';
import Waves from './images/waves.png';
import Monero0 from './images/monero.png';
import Binance0 from './images/binance.png';
import Pancake0 from './images/pan-cake.png';
import Ethereum0 from './images/etheturem.png';
import cote0 from './images/cote.png';

function App() {
  return (
    <div className="">
      <Header />
      <div className='hero-section'>
        <div className='container'>
          <div className='hero-section-wrapper'>
            <div className='row gy-5'>
              <div className='col-lg-6 col-md-12'>
                <div className='hero-section-content-left'>
                  <h2><span>Revolutionizing </span>
                    The Digital Wallet
                    Gateway</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Egestas enim sodales gravida habitant.
                    Risus ultrices ut tristique luctus consectetur facilisi. Tempus a blandit mattis commodo nisi.</p>
                  <div className="d-flex justify-content-start">
                    <form action="" className="form-download hero-section-form">
                      <input type="email" name="email" id="email" placeholder="Enter your email address" className="form-control" />
                      <input type="submit" value="Subscribe Now" className="form-control" />
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='hero-section-right-img'>
                  <img src={RevenueImage} alt='hero section right' className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='overlap-section-main'>
          <div className='overlap-section-inner'>
            <div className='row'>
              <div className='col-4'>
                <div className='overlap-main-sec-box first-box-'>
                  <div className='overlap-main-sec-box-img'>
                    <img src={Frame_1} alt="Support" />
                  </div>
                  <div className='overlap-main-sec-box-content'>
                    <h4>Supported Assets</h4>
                    <span>100+</span>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='overlap-main-sec-box'>
                  <div className='overlap-main-sec-box-img'>
                    <img src={Frame_user} alt="Support" />
                  </div>
                  <div className='overlap-main-sec-box-content'>
                    <h4>Active Users</h4>
                    <span>12K+</span>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='overlap-main-sec-box'>
                  <div className='overlap-main-sec-box-img'>
                    <img src={Frame_location} alt="Support" />
                  </div>
                  <div className='overlap-main-sec-box-content'>
                    <h4>Active Countries</h4>
                    <span>150+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section-9">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-6 col-md-12">
              <img src={Secureway} alt="customer_support" class="img-fluid" />
            </div>
            <div class="col-lg-6 col-md-12 support sec-02">
              <h2>The easiest, fastest and most secure way!</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum. Ultrices tortor turpis non libero nullam egestas arcu nam id. Donec commodo massa at diam dui. Ultricies cursus quis ut ac accumsan.</p>
              <p>Elementum ornare in mi augue purus nullam urna facilisi. At nunc scelerisque eleifend nascetur aenean vitae elit aliquam. Arcu ultrices diam eu in neque eget in posuere vestibulum. </p>
              <button>Download Our App</button>
            </div>
          </div>
        </div>
      </section>
      <section class="section-9">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-6 col-md-12 support sec-02">
              <h2>Mote than <span>30+</span> Payment Methods</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum. Ultrices tortor turpis non libero nullam egestas arcu nam id.</p>
             <div id='timeline' className=' only-text'>
              <h1>MTN, MOOV, Orange, Airtel, Tmoney, Wave, Free Mony....</h1>
             </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <img src={Secureway01} alt="customer_support" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section class="section-8 mine-heading">
        <div class="container">
          <h2>Some Listed</h2>
          <h3 className="h3-heading"> Cryptocurrencies</h3>
          <div class="row gy-5 countries justify-content-center">
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto1} alt="bitcoin" />
                <div>
                  <h3>Bitcoin</h3>
                  <span>BTC</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto2} alt="niger" />
                <div>
                  <h3>Ripple</h3>
                  <span>XRP</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Shiba} alt="cameroon" />
                <div>
                  <h3>Shiba lnu</h3>
                  <span>SHIB</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto4} alt="togo" />
                <div>
                  <h3>Tron</h3>
                  <span>TRX</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Dogecoin} alt="mali" />
                <div>
                  <h3>Dogecoin</h3>
                  <span>DOGE</span>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row gy-5 countries justify-content-center">
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Monero0} alt="bitcoin" />
                <div>
                  <h3>Monero</h3>
                  <span>XMR</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto8} alt="niger" />
                <div>
                  <h3>Tether</h3>
                  <span>USDT</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Waves} alt="cameroon" />
                <div>
                  <h3>Waves</h3>
                  <span>WAVES</span>
                </div>
              </div>
            </div>
           
           
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Binance0} alt="rdc" />
                <div>
                  <h3>Binance Coin</h3>
                  <span>BNB</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row gy-5 countries justify-content-center">
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto13} alt="niger" />
                <div>
                  <h3>BUSD</h3>
                  <span>BUSD</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Ethereum0} alt="cameroon" />
                <div>
                  <h3>Ethereum</h3>
                  <span>ETH</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Pancake0} alt="togo" />
                <div>
                  <h3>Pancake</h3>
                  <span>CAKE</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto16} alt="mali" />
                <div>
                  <h3>Bitcoin</h3>
                  <span>BCH</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Crypto10} alt="togo" />
                <div>
                  <h3>Stellar</h3>
                  <span>XLM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyTimeline />

      <section class="section-6">
        <div class="container">
          <div class="section-head text-center">
            <span>maticrypto</span>
            <h2>Most Reliable Transaction Platform</h2>
          </div>
          <div class="row gy-4">
            <div class="col-lg-4 col-md-5 col-sm-12">
              <div class="property-inner">
                <div class="property-img">
                  <img src={Propert1} alt="propert1" class="img-fluid" />
                </div>
                <div class="property-desc">
                  <h3>Security</h3>
                  <p>Lorem ipsum dolor sit amet conectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
              <div class="property-inner">
                <div class="property-img">
                  <img src={Propert2} alt="propert2" class="img-fluid" />
                </div>
                <div class="property-desc">
                  <h3>Speed</h3>
                  <p>Lorem ipsum dolor sit amet conectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
              <div class="property-inner">
                <div class="property-img">
                  <img src={Propert3} alt="propert3" class="img-fluid" />
                </div>
                <div class="property-desc">
                  <h3>Innovation</h3>
                  <p>Lorem ipsum dolor sit amet conectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section-8">
        <div class="container">
          <h2>We Cover <span>12+</span> Countries</h2>
          <div class="row gy-5 countries">
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Bitcoin} alt="bitcoin" />
                <h3>Benin</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Niger} alt="niger" />
                <h3>Niger</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Cameroon} alt="cameroon" />
                <h3>Cameroon</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Togo} alt="togo" />
                <h3>Togo</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Mali} alt="mali" />
                <h3>Mali</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Rdc} alt="rdc" />
                <h3>RDC</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Faso} alt="Burkina Faso" />
                <h3>Burkina<br />Faso</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Senegal} alt="Senegal" />
                <h3>Senegal</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Guinea} alt="Guinea" />
                <h3>Guinee</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Gabon} alt="Gabon" />
                <h3>Gabon</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={cote0} alt="Rwanda" />
                <h3>Côte d'Ivoire</h3>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="country-inner">
                <img src={Kenya} alt="Kenya" />
                <h3>Kenya</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-9">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-6 col-md-12">
              <img src={Customer_support} alt="customer_support" class="img-fluid" />
            </div>
            <div class="col-lg-6 col-md-12 support">
              <h2>Our Customer Support is Available <span>24/7</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum.</p>
              <p>Ultrices tortor turpis non libero nullam egestas arcu nam id. Donec commodo massa at diam dui.</p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <section class="section-10">
        <div class="container">
          <div class="section-head text-center">
            <span>Testimonials</span>
            <h2>Our Satisfied Customers</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="testimonial-main">
                <img src={Person1} alt="person1" />
                <p>I have used this platform several times to exchange dollars into francs and it is reliable.</p>
                <h3>Jane Cooper</h3>
                <span>Cameroon</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="testimonial-main">
                <img src={Person2} alt="person2" />
                <p>I have used this platform several times to exchange dollars into francs and it is reliable.</p>
                <h3>Leslie Alexanderr</h3>
                <span>Senegal</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="testimonial-main">
                <img src={Person3} alt="person3" />
                <p>I have used this platform several times to exchange dollars into francs and it is reliable.</p>
                <h3>Guy Hawkins</h3>
                <span>Mali</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-7">
        <div class="container">
          <div class="section-head text-center">
            <span>Download our App</span>
            <h2>Start Buying and Selling Easier and Faster</h2>
          </div>
          <div className="d-flex justify-content-center">
            <form action="" className="form-download">
              <input type="email" name="email" id="email" placeholder="Enter your email address" className="form-control" />
              <input type="submit" value="Subscribe Now" className="form-control" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default App;