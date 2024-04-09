import React from 'react';
import "./header.css";
import headerLogo from '../images/header-logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark main-top-bar-header">
                <div className="container">
                    <div className='header-log0'>
                    <a className="navbar-brand fw-bold" href="/a"><img src={headerLogo} alt="header-logo"/></a>
                    </div>
                    <div className='main-mobile-menu-show'>
                    <div className='right-menu'>
                        <a href='' className='nav-link'>Create Account</a>
                       <button>Download</button>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 header-menu-list">
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Who we are <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/a">Action</a></li>
                                    <li><a className="dropdown-item" href="/a">Another action</a></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wallets
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/a">Action</a></li>
                                    <li><a className="dropdown-item" href="/a">Another action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NFTs
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/a">Action</a></li>
                                    <li><a className="dropdown-item" href="/a">Another action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/a">Action</a></li>
                                    <li><a className="dropdown-item" href="/a">Another action</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className='right-menu hide-on small-menu'>
                        <a href='' className='nav-link'>Create Account</a>
                       
                        <button>Download</button>
                        </div>
                       <div className='language-selector'>
                        <select>
                            <option>EN</option>
                            <option>Ar</option>
                        </select>
                       </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
