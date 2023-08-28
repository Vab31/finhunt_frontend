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

// "@emotion/react": "^11.11.1",
// "@emotion/styled": "^11.11.0",
// "@headlessui/react": "^1.7.13",
// "@heroicons/react": "^2.0.17",
// "@material-ui/core": "^4.12.4",
// "@mui/icons-material": "^5.14.3",
// "@mui/material": "^5.14.5",
// "@testing-library/jest-dom": "^5.16.5",
// "@testing-library/react": "^13.4.0",
// "@testing-library/user-event": "^13.5.0",
// "axios": "^1.3.6",
// "bootstrap": "^5.2.3",
// "mdb-react-ui-kit": "^5.1.0",
// "popper.js": "^1.16.1",
// "react": "^18.2.0",
// "react-bootstrap": "^2.7.2",
// "react-dom": "^18.2.0",
// "react-icons": "^4.7.1",
// "react-responsive-carousel": "^3.2.23",
// "react-router-dom": "^6.10.0",
// "react-scripts": "^5.0.1",
// "read-scripts": "^1.1.0",
// "web-vitals": "^2.1.4"