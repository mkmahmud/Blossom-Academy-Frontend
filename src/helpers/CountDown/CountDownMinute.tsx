import  { useEffect, useState } from "react";

const CountDownMinute = ({ initialMinutes, settimeup, handleStop }: any) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

 
  // Stop After Select option
  useEffect(() => {
    if(handleStop){
      setIsRunning(false)
    }
  }, [handleStop])

  //Set Time Up
  if (secondsRemaining == 0) {
    settimeup(true);
  }
  
  return <div>{formatTime(secondsRemaining)}</div>;
};

export default CountDownMinute;
