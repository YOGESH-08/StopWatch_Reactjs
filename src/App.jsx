import React, { useState } from "react";
import "./App.css";
import { Zoom } from "@mui/material";
import Button from "./button";

function App() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [lap, setLap] = useState([]);

  function startTimer() {
    if (!isRunning) {
      const id = setInterval(() => {
        setSec((prev) => prev + 1000);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  }

  function stopTimer() {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
      setIntervalId(null);
    }
  }

  function resetTimer() {
    stopTimer();
    setSec(0);
    setLap([]);
  }

  function splitTimer() {
    setLap((prev) => {
      return[...prev, sec]});
  }

  function formatTime(milliseconds) {
    const h = Math.floor(milliseconds / (1000 * 60 * 60));
    const m = Math.floor((milliseconds / (1000 * 60)) % 60);
    const s = Math.floor((milliseconds / 1000) % 60);
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      <div className="container">
        <div className="top">
          <h1>Stopwatch</h1>
        </div>
        <div className="time">{formatTime(sec)}</div>
        <div className="bottom">
        
        <Button 
          value="Start"
          onClick = {startTimer}/>
          
        <Button 
          value="Stop"
          onClick = {stopTimer}/>

        <Button 
          value="Split"
          onClick = {splitTimer}/>

        <Button 
          value="Reset"
          onClick = {resetTimer}/>

        </div>
      </div>

      <div className="container2">
        {lap.map((lapTime, index) => (
          <p key={index}>
            Lap {index + 1}: {formatTime(lapTime)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
