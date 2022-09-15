import React from "react";
import "./index.scss";

export default function Star({ className, value, width, height, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value < 5)
    star.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{
          left: leftPos,
          width: decimals * width - spacing,
          height: height,
        }}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    star.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}
