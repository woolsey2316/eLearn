import React from "react";
import Calendar from "./Calendar";
import { CalendarDay } from "./CalendarDay";
type Props = {
  today: Date;
};
const CalendarDateTile = ({ today }: Props) => {
  const month_ = today.getMonth();
  const year_ = today.getFullYear();
  const date = today.getDate();

  return (
    <React.Fragment>
      {Calendar.daysBeforeCurrentMonth(today).map((day, i) => (
        <CalendarDay key={i} month={month_ - 1} day={day} disabled={true} />
      ))}
      {Array(Calendar.getDaysInMonth(month_ + 1, year_))
        .fill("")
        .map((elem, index) => (
          <CalendarDay
            key={index}
            month={month_}
            day={index + 1}
            disabled={false}
          />
        ))}
      {Calendar.daysAfterCurrentMonth(today).map((day, i) => (
        <CalendarDay key={i} month={month_ + 1} day={day} disabled={true} />
      ))}
    </React.Fragment>
  );
};

export default CalendarDateTile;
