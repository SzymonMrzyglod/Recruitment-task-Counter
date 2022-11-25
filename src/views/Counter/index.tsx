import { FC } from "react";
import { useCounter } from "../../hooks/useCounter";
import {
  CounterMachineActionType,
  CounterResultProps,
} from "../../types/counter";

export const CounterResult: FC<CounterResultProps> = ({
  counter,
  counterState,
}) => (
  <>
    <h1>{`Counter: ${counter}`}</h1>
    <h2>{`Counter state: ${counterState}`}</h2>
  </>
);

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
