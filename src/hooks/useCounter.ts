import { useState } from "react";
import { CounterMachineStateType, UseCounterReturn } from "../types/counter";

export const useCounter = (): UseCounterReturn => {
  const [counter, setCounter] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [counterState, setCounterState] = useState<CounterMachineStateType>(
    CounterMachineStateType.IDLE
  );
  const handleCounterStopClick = () => {
    if (intervalId && counterState === CounterMachineStateType.RUNNING) {
      clearInterval(intervalId);
      setIntervalId(0);
      setCounterState(CounterMachineStateType.PAUSED);
      return;
    }
  };

  const handleCounterStartClick = () => {
    if (
      counterState === CounterMachineStateType.IDLE ||
      counterState === CounterMachineStateType.PAUSED
    ) {
      const newIntervalId = setInterval(() => {
        setCounter((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(Number(newIntervalId));
      setCounterState(CounterMachineStateType.RUNNING);
    }
  };

  const handleIncrementClick = () => {
    if (counterState === CounterMachineStateType.RUNNING) {
      return setCounter(counter + 5);
    }
    return;
  };

  const handleResetClick = () => {
    if (counterState === CounterMachineStateType.PAUSED) {
      setCounterState(CounterMachineStateType.IDLE);
      setCounter(0);
    }
    return;
  };
  return {
    handleCounterStartClick,
    handleCounterStopClick,
    handleIncrementClick,
    handleResetClick,
    counter,
    counterState,
  };
};