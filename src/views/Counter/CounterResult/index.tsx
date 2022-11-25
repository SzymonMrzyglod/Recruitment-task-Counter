import { FC } from "react";
import { CounterResultProps } from "../../../types/counter";

export const CounterResult: FC<CounterResultProps> = ({
  counter,
  counterState,
}) => (
  <>
    <h1>{`Counter: ${counter}`}</h1>
    <h2>{`Counter state: ${counterState}`}</h2>
  </>
);
