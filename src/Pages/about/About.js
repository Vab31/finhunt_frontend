// import React from 'react'
// import "./about.css";

// function About() {
//   return (
//     <div>
//     <h1 className='head'>About Us</h1>
//     <p className='about1'>    The Bulls is an visionary finance firm aiming to contribute in the financial literacy of India. We will be producing content and blogs related to investing, trading and personal finance. Also we are making a community of trader and invester who are at beginner, intermediate and advanced stage connecting them so beginners can minimise their mistakes.
// </p>

// <p className='about2'>
//   If you are a investor or trader. At a beginner stage then we have made a beginner friendly environment to learn about stock market. Also If you are experienced in stock market you can share your learn and experience
// </p>

// <p className='about3'>
// <h4>👉 Join our community </h4>
//   Contact Us - 9999149111

// </p>
//     </div>
//   )
// }

// export default About

import React from "react";
import { communityData } from "../../communityData";
import CommunityCard from "../../components/Community/CommunityCard";
// import CommunityCard from "../../components/Community/CommunityCard";
import "./about.css";

function About() {
  return (
    <div className="about_parent">
      <h1 className="head">About Us</h1>
      <div className="about_below_header">
        <p className="about1">
          {" "}
          The Bulls is an visionary finance firm aiming to contribute in the
          financial literacy of India. We will be producing content and blogs
          related to investing, trading and personal finance. Also we are making
          a community of trader and invester who are at beginner, intermediate
          and advanced stage connecting them so beginners can minimise their
          mistakes.
        </p>

        <p className="about2">
          If you are a investor or trader. At a beginner stage then we have made
          a beginner friendly environment to learn about stock market. Also If
          you are experienced in stock market you can share your learn and
          experience
        </p>
      </div>
      <div className="about_community bg-lime-800">
        <div className="community_member_box">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5 ">
            {communityData.map((item, index) => {
              return (
                <div >
                  <CommunityCard item={item}/>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="about_footer">
        <div>👉 Join our community </div>
        <div>Contact Us : - 9999149111</div>
      </div>
    </div>
  );
}

export default About;
