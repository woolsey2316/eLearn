export type CountdownTimerProps = {
  timeLeft: Partial<TimeLeft>;
  setTimeLeft: React.Dispatch<React.SetStateAction<Partial<TimeLeft>>>;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
