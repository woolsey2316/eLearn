import React from "react";
type Props = {
  month: Number;
  day: Number;
  disabled: Boolean;
};
function CalendarDay(props: Props) {
  function isTodayDate() {
    return (
      new Date().getDate() === props.day &&
      props.month === new Date().getMonth()
    );
  }
  return (
    <div
      className={
        "px-5 py-3 mx-auto rounded relative" +
        (isTodayDate() ? " bg-theme-1 text-white rounded relative" : "") +
        (props.disabled ? " text-gray-500" : "")
      }
    >
      {props.day}
    </div>
  );
}
export { CalendarDay };
