import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DateTimeUnit = ({ value, type, seperate }) => {
  const placeValues = [];
  if (!Object.is(value, NaN)) {
    const len = value.toString().length;
    if (len === 1) placeValues.push(0);
    for (let i = 0; i < len; i++) placeValues.push(value.toString()[i]);
  } else {
    placeValues.push(-1);
    placeValues.push(-1);
  }

  // const ones = value % 10,
  //   tens = Math.floor(value / 10);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {placeValues.map((val, i) => {
          return (
            <p
              key={i}
              className="text-3xl sm:text-4xl xl:text-5xl mr-1 font-bebas py-1 sm:py-2 px-2 sm:px-3 rounded-md bg-mainGray text-primaryRed"
            >
              {val == -1 ? (
                <Skeleton width="20px" highlightColor="#202020" />
              ) : (
                val
              )}
            </p>
          );
        })}
        {/* space-x-4 sm:space-x-5 */}
        {seperate && (
          <p className="opacity-60 text-xl font-bold -ml-1 px-2">:</p>
        )}
      </div>
      <span className="opacity-60 mt-2 text-sm sm:text-base">
        {Object.is(value, NaN) ? <Skeleton width={35} height={8} /> : type}
      </span>
    </div>
  );
};

export default DateTimeUnit;
