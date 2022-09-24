import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeUnit from "./DateTimeUnit";

const CountdownTimer = ({ className, targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className={`${className} flex content-center items-center space-x-4`}>
      <DateTimeUnit value={days} type={"Days"} seperate />
      <DateTimeUnit value={hours} type={"Hours"} seperate />
      <DateTimeUnit value={minutes} type={"Minutes"} />
      {/* <DateTimeUnit value={seconds} type={"Seconds"} /> */}
    </div>
  );
};

export default CountdownTimer;
