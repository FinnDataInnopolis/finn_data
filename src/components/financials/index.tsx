import React from "react";

function Financials({
  tenDayAverageTradingVolume = "",
  fiftyTwoWeekHigh = "",
  fiftyTwoWeekLow = "",
  fiftyTwoWeekLowDate = "",
  fiftyTwoWeekPriceReturnDaily = "",
  beta = "",
}
) {
  return (
    <div className="container">
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`10DayAverageTradingVolume`}</div>{" "}
            <div className="col-12 col-md-6 fw-bold">{ tenDayAverageTradingVolume }</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52WeekLowDate`}</div>
            <div className="col-12 col-md-6 fw-bold">{ fiftyTwoWeekLowDate }</div>
          </div>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52WeekHigh`}</div>
            <div className="col-12 col-md-6 fw-bold">{ fiftyTwoWeekHigh }</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52WeekPriceReturnDialy`}</div>
            <div className="col-12 col-md-6 fw-bold">{ fiftyTwoWeekPriceReturnDaily }</div>
          </div>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52WeekLow`}</div>
            <div className="col-12 col-md-6 fw-bold">{ fiftyTwoWeekLow }</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`Beta`}</div>
            <div className="col-12 col-md-6 fw-bold">{ beta }</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financials;
