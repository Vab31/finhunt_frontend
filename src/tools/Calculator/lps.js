import React, { useState } from "react";
import "./sip.css";
import Tophead from "./topheader";
import Footer from "../../Pages/Home/footer/Footer";

export default function Lumpsum() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [amountTotalInvested, setAmountTotalInvested] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [estimeted, setEstimeted] = useState(0);

  function calculateLumpsum() {
    const rateOfReturn = rate / 100;
    const months = time * 12;

    const newAmountTotalInvested = parseFloat(amount);
    setAmountTotalInvested(newAmountTotalInvested);

    const newFutureValue = newAmountTotalInvested * Math.pow(1 + rateOfReturn, time);
    setFutureValue(newFutureValue);

    const newEstimeted = newFutureValue - newAmountTotalInvested;
    setEstimeted(newEstimeted);
  }

  return (
    <div>
      <Tophead />
      <h2 className="text-center mt-1">Lumpsum</h2>
      <div className="wraper container mt-3" id="bc-color">
        <div className="row justify-content-evenly">
          <div className="col-lg-4 text-centre">
            <div className="field">
              <label htmlFor="">Total Investment ₹</label>
              <div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="5000"
                  className="amount"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="">Expected return rate(p.a) %</label>
              <div>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="15"
                  className="rate"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="">Time period (years)</label>
              <div>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="20"
                  className="years"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={calculateLumpsum}
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
              <p id="Estreturn">₹ {Math.round(estimeted)}</p>
            </h4>
            <h4>
              Total Value :
              <p id="futureValue">₹ {Math.round(futureValue)}</p>
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
}
