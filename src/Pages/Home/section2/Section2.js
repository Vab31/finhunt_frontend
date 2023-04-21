import React from "react";
import "./section2.css";

const Section2 = () => {
  return (
    
    <div>
      <div className="header" style={{width:"100%",textAlign:"center",fontSize:"50px",fontWeight:"700"}}>
             <div className="head-text text" >Why You Should Be Investing?</div>
      </div>
      <div className="belowHeader " style={{width:"100%",display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"space-around",marginTop:"30px"}}>
        <div className="box" style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"space-around",width:"250px" }}>
          <div>
          <img
              src="../../returns.png"
              alt=""
              style={{maxWidth:"150px", maxHeight:"150px",}}
            />
          </div>
          <div style={{fontSize:"25px",textAlign:"center"}}>High Returns</div>
        </div >
        <div className="box" style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"space-around",width:"250px" }}>
          <div>
          <img src="../../inflation.png" alt=""
            style={{maxWidth:"150px", maxHeight:"150px",}}
             />
          </div>
          <div style={{fontSize:"25px",textAlign:"center"}}>Beat Inflation</div>
        </div>
        <div className="box" style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"space-around",width:"250px",rowGap:"20px" }}>
          <img
              src="../../tax.png"
              alt=""
              style={{maxWidth:"150px", maxHeight:"130px",}}


            />
          <div style={{fontSize:"25px",textAlign:"center"}}>Get tax benefits</div>
        </div>
        {/* <div className="box" style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"space-around",width:"250px" }}>
          <div>
          <img src="../../passive.png" alt="" 
                style={{maxWidth:"150px", maxHeight:"150px"}}


          />
          </div>
          <div style={{fontSize:"25px",textAlign:"center"}}>Earn additional income</div>
          
        </div> */}
      </div>
      <div  style={{fontSize:"50px",textAlign:"center",marginTop:"20px",fontWeight:"bolder",marginBottom:"-80px"}} >On A Mission To Make India Financially Literate</div>
    </div>
  );
};

export default Section2;
