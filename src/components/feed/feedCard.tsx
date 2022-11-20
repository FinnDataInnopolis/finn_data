import React from "react";

function FeedCard({
  imageUrl = "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
  description = "helllo some test ",
}) {
  return (
    <div
      className={"feed-card position-relative rounded overflow-hidden"}
      style={{
        background: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className={
          "feed-card-content text-white p-3 bottom-0 position-absolute w-100"
        }
        style={{
          backgroundColor: "rgba(18,33,39,0.74)",
        }}
      >
        {description}
      </div>
    </div>
  );
}

export default FeedCard;
