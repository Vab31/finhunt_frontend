import React, { useState } from "react";
import "./sip.css";
import Tophead from "./topheader";
// import React, { useState } from "react";
import Footer from "../../Pages/Home/footer/Footer";

export default function Lumpsum() {
  
  const [SipAmount, setSipAmount] = useState("");
  const [rate, setrate] = useState("");
  const [time, settime] = useState("");

  // var amountInvested = SipAmount;
  var rateOfReturn = rate;
  var amountTotalInvested = SipAmount;
  // var monthlyRate = rateOfReturn / 12 / 100;
  var months = time;
  var futureValue = 0;
  var Estimeted = futureValue - amountTotalInvested;

  function CalculateSIP() {
    amountTotalInvested = SipAmount;

    futureValue =
      amountTotalInvested * Math.pow(1 + rateOfReturn / 100, months);
    Estimeted = futureValue - amountTotalInvested;
  }
  return (
    <div>
    <Tophead/>
      <h2 className="text-center mt-1">Lumpsum</h2>
      <div className="wraper container mt-3" id="bc-color">
        <div className="row justify-content-evenly">
          <div className="col-lg-4 text-centre">
            <div className="field">
              <label htmlfor="">Total Investment ₹</label>
              <div>
                <input
                  type="number"
                  value={SipAmount}
                  onChange={(e) => setSipAmount(e.target.value)}
                  placeholder="5000"
                  className="amount"
                />
              </div>
            </div>
            <div className="field">
              <label htmlfor="">Expected return rate(p.a) %</label>
              <div>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setrate(e.target.value)}
                  placeholder="15%"
                  className="rate"
                />
              </div>
            </div>
            <div className="field">
              <label htmlfor="">Time period (years)</label>
              <div>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => settime(e.target.value)}
                  placeholder="20 year"
                  className="years"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={CalculateSIP()}
              className="btn Sipbtn btn-secondary btn-md btn-block"
            >
              Calculate
            </button>
          </div>
          <div className="col-lg-4 mt-4 m">
            <h4>
              Invested Amount:
              <p id="amountI">₹ {Math.round(amountTotalInvested)}</p>
            </h4>
            <h4>
              Est. returns:
              <p id="Estreturn">₹ {Math.round(Estimeted)}</p>
            </h4>
            <h4>
              Total Value :<p id="futureValue">₹ {Math.round(futureValue)}</p>
            </h4>

          </div>
        </div>
      </div>
      <div className="mt-60">
     <Footer/> </div>
    </div>
  );
}