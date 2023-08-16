import React, { useState } from "react";
import Footer from "../../Pages/Home/footer/Footer";
import "./sip.css";
import Tophead from "./topheader";

export default function Emergencyfundcal() {

  const [permonthsAmount, setemergencyAmount] = useState("");
  const [val, setval] = useState("");
  const [ans,setans]=useState(0);

  function Emergenccal(){
  const amountTotalInvested = permonthsAmount * val;
  setans(amountTotalInvested);
  }

  return (
    <div>
      <Tophead />
      <h2 className="text-center mt-1">Emergency Fund Calculator</h2>
      <div className="wraper container mt-3" id="bc-color">
        <div className="row justify-content-evenly">
          <div className="col-lg-4 text-centre">
            <div className="field">
              <label htmlFor="">Monthly Investment ₹</label>
              <div>
                <input
                  type="number"
                  value={permonthsAmount}
                  onChange={(e) => setemergencyAmount(e.target.value)}
                  placeholder="5000"
                  className="amount"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="">Months of savings desired</label>
              <div>
                <input
                  type="number"
                  value={val}
                  onChange={(e) => setval(e.target.value)}
                  placeholder="5"
                  className="val"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={Emergenccal} 
              className="btn Sipbtn btn-secondary btn-md btn-block"
            >
              Calculate
            </button>
          </div>
          <div className="col-lg-4 mt-4">
            <h4>
              Emergency fund:
              <p id="amountI">₹ {Math.round(ans)}</p>
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
