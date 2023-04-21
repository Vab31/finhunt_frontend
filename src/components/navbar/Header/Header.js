import React from "react";
import './Header.css'

export const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <i className='bx bx-menu'></i>
                <div className="">
                <a href="#"><img src="../../logo.png" alt="" />&nbsp;<span>The Bull</span></a>
                </div>
                <div className="nav-links">
                    <div className="sidebar-logo">
                        <span className="logo-name"><img src="../../logo.png" alt="" /></span>
                        <i className='bx bx-x'></i>
                    </div>
                    <ul className="links">

                        <li>
                            <a href="/">Home</a>
                            {/* <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                            <ul className="htmlCss-sub-menu sub-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/Blogs">Blog</a></li>
                                <li><a href="/Tools">Tools</a></li>
                                <li><a href="/About">About</a></li>
                                <li className="more">
                                    <span><a href="#">More</a>
                                        <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                    </span>
                                    <ul className="more-sub-menu sub-menu">
                                        <li><a href="#">Neumorphism</a></li>
                                        <li><a href="#">Pre-loader</a></li>
                                        <li><a href="#">Glassmorphism</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="/Blogs">Learn</a>
                            {/* <i className='bx bxs-chevron-down js-arrow arrow '></i>
                            <ul className="js-sub-menu sub-menu">
                                <li><a href="#">Dynamic Clock</a></li>
                                <li><a href="#">Form Validation</a></li>
                                <li><a href="#">Card Slider</a></li>
                                <li><a href="#">Complete Website</a></li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="/Tools">Tools</a>
                            {/* <i className='bx bxs-chevron-down js-arrow arrow '></i>
                            <ul className="js-sub-menu sub-menu">
                                <li><a href="#">Dynamic Clock</a></li>
                                <li><a href="#">Form Validation</a></li>
                                <li><a href="#">Card Slider</a></li>
                                <li><a href="#">Complete Website</a></li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="/About">About</a>
                            {/* <i className='bx bxs-chevron-down js-arrow arrow '></i>
                            <ul className="js-sub-menu sub-menu">
                                <li><a href="#">Dynamic Clock</a></li>
                                <li><a href="#">Form Validation</a></li>
                                <li><a href="#">Card Slider</a></li>
                                <li><a href="#">Complete Website</a></li>
                            </ul> */}
                        </li>

                    </ul>
                </div>
                <div className="search-box">
                    <i className='bx bx-search'></i>
                    <div className="input-box">
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </nav>
    );
}