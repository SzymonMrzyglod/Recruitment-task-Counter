export enum CounterMachineActionType {
  START = "start",
  STOP = "stop",
  INCREMENT = "increment",
  RESET = "reset",
}

export enum CounterMachineStateType {
  IDLE = "idle",
  RUNNING = "running",
  PAUSED = "paused",
}

export interface CounterResultProps {
  counter: number;
  counterState: CounterMachineStateType;
}

export interface UseCounterReturn {
  handleCounterStartClick: () => void;
  handleCounterStopClick: () => void;
  handleIncrementClick: () => void;
  handleResetClick: () => void;
  counter: number;
  counterState: CounterMachineStateType;
}