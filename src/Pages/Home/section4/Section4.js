import React from 'react'
import './section4.css'
import {FaTelegram,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa';

const Section4 = () => {
  return (
    <div className="Section4 mt-10">
      <div className="head">
        <h1 className="head_main mt-10">Trusted By Users.</h1>
        <p className="head_lines">
          Definitely We are leading the conversations on all social media. Here
          are some of them.
        </p>
      </div>
      <div className="">
    
    <div className="">
        <div className="cards-wrapper">
          <div className="card">
            <img
              src="../../card/Akash.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Akash Yadav</h5>
              <p className="card-text">
                "I trust your judgment completely when it comes to financial
                matters. You have always steered me in the right direction."
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="../../card/Anshuman.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Anshuman</h5>
              <p className="card-text">
                "Your knowledge of tax laws and regulations is impressive and
                has saved me a lot of money over the years."
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="../../card/Chetan.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Chetan</h5>
              <p className="card-text">
                "I'm grateful for your guidance and support in achieving my
                financial goals. Thank you for always being there to help."
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="../../card/Riyansh.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Riyansh</h5>
              <p className="card-text">
                "Your financial advice has been invaluable to me and has helped
                me make smart decisions with my money."
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="Footer mt-3">

        <div className="contact_form ">

        

        </div>
        

       
      </div>
    </div>
    </div>
  );
}

export default Section4

