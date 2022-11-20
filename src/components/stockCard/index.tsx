import React from "react";
import moment from "moment";

function StockCard({
  name = "",
  ticker = "",
  currency = "",
  country = "",
  exchange = "",
  price = "",
}) {
  return (
    <div className="stock-details d-flex">
      <div className="d-flex flex-row w-100">
        <div className="col-8">
          <span className="fs-3">{`${name}`}</span>
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                <span> {`Ticker: `}</span>
                <span>{`${ticker}`}</span>
              </p>
              <p>
                <span>{`Currency: `}</span>
                <span>{`${currency}`}</span>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <span>{`Country: `}</span>
                <span>{`${country}`}</span>
              </p>
              <p>
                <span>{`Exchange: `}</span>
                <span>{`${exchange}`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-end position-relative">
          <span>{`price on ${moment().format("MMMM Do")}`}</span>
          <p className="d-block fs-1 position-absolute bottom-0 mb-0 w-100">{`${price} $`}</p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;
