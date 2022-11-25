import { FC } from "react";
import { useCounter } from "../../hooks/useCounter";
import { CounterMachineActionType } from "../../types/counter";
import { CounterResult } from "./CounterResult";

export const Counter: FC = () => {
  const {
    handleCounterStartClick,
    handleCounterStopClick,
    handleIncrementClick,
    handleResetClick,
    counter,
    counterState,
  } = useCounter();

  return (
    <div>
      <CounterResult counter={counter} counterState={counterState} />
      <button onClick={handleCounterStartClick}>
        {CounterMachineActionType.START}
      </button>
      <button onClick={handleCounterStopClick}>
        {CounterMachineActionType.STOP}
      </button>

      <button onClick={handleIncrementClick}>
        {CounterMachineActionType.INCREMENT}
      </button>
      <button onClick={handleResetClick}>
        {CounterMachineActionType.RESET}
      </button>
    </div>
  );
};
