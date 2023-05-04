import React, { useState } from "react";

const Clock = () => {

  const [timer,setTimer] = useState<string>("00:00:00");

  const currentTimer = () => {
    const date : any = new Date();
    const hours : string = String(date.getHours()).padStart(2, "0");
    const minutes : string = String(date.getMinutes()).padStart(2, "0");
    const seconds : string = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <div>
      <div className="clockWrap">
      <h1>{timer}</h1>
      </div>
    </div>
  )
}

export default Clock;