import React from "react";
import FeedCard from "./feedCard";

function FeedList({ list = [] }) {
  if (list.length != 0) {
    return (
      <div className="row">
        {list.map((feed) => (
          <div
            className="col-12 col-md-6 col-lg-3 mb-3 user-select-pointer"
            key={feed.id}
          >
            <FeedCard imageUrl={feed.image} description={feed.headline} />
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default FeedList;
