import React from "react";
import "./topheader.css"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default function Tophead(){
 return(
    <div className="">
    <div id="header">
      <header className="">
        {/* <h1 className="text-center container pt-4">SIP Calculator</h1> */}
        <h5 className="text-center pt-3">Systematic Investment Plan Calculator</h5>
        <div className="text-center mt-4">
          <Link
            to="/SIP"
            className="btn Navbtn p-2 btn-secondary mx-2 btn-sm active"
            role="button"
            aria-pressed="true"
          >
            SIP
          </Link>
          <Link
            to="/Lumpsum"
            className="btn Navbtn p-2 btn-secondary mx-2 my-2"
            role="button"
            aria-pressed="true"
          >
            Lumpsum
          </Link>
          <Link
            to="/emergency"
            className="btn Navbtn p-2 btn-secondary mx-2 sm:top-6 "
            role="button"
            aria-pressed="true"
          >
            Emergency fund Calculator
          </Link>
        </div>
      </header>
    </div>
  </div>

 );


}