import React, { useState } from "react";
import Footer from "../../Pages/Home/footer/Footer";
import "./sip.css";
import Tophead from "./topheader";
// import Footer from "../../Pages/Home/footer/Footer";
// import React, { useState } from "react";

export default function Sip() {
  // const [InvAmount, setInvAmount] = useState("");
  // const [EstReturn, setEstReturn] = useState("");
  // const [totalValue, settotalValue] = useState("");
  const [SipAmount, setSipAmount] = useState("");
  const [rate, setrate] = useState("");
  const [time, settime] = useState("");

  // var amountInvested = SipAmount;
  var rateOfReturn = rate;
  var monthlyRate = rateOfReturn / 12 / 100;
  var months = time * 12;
  var amountTotalInvested = SipAmount * months;
  var futureValue = 0;
  var Estimeted = futureValue - amountTotalInvested;

  function CalculateSIP() {
    amountTotalInvested = SipAmount * months;
    futureValue =
      (SipAmount * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate;
    Estimeted = futureValue - amountTotalInvested;
  }
  return (
    <div>
    <Tophead/>
      <h2 className="text-center mt-1">SIP</h2>
      <div className="wraper container mt-3" id="bc-color">
        <div className="row justify-content-evenly">
          <div className="col-lg-4 text-centre">
            <div className="field">
              <label htmlfor="">Monthly Investment ₹</label>
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
          <div className="col-lg-4 mt-4">
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