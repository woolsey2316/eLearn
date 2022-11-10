import React, { useEffect, useState } from "react";
import Tooltip from "@reach/tooltip";

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

const calculateTimeLeft = (duration) => {
  const difference = +duration - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function CountdownTimer({ timeLeft, setTimeLeft }) {
  const [duration, _] = useState(new Date().addHours(1));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(duration));
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <h2 className="font-medium items-center px-2">
        {timeLeft[interval]} {interval}
      </h2>
    );
  });

  return (
    <Tooltip
      style={{
        background: "hsla(0, 0%, 0%, 0.75)",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "0.5em 1em",
        zIndex: "10000",
      }}
      label="All Answers will automatically submit when timer ends"
    >
      <div className="flex items-center pb-1 mr-2">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <h2 className="font-medium items-center pt-2 pb-1 px-2">
            Time's up!
          </h2>
        )}
      </div>
    </Tooltip>
  );
}

export { CountdownTimer, calculateTimeLeft };
