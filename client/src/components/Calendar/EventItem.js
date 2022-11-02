import React from "react";
const EventItem = ({ event }) => {
  function ordinalNumber(num) {
    if (num % 10 === 1) {
      return num + "st";
    } else if (num % 10 === 2) {
      return num + "nd";
    } else if (num % 10 === 3) {
      return num + "rd";
    }
    return num + "th";
  }
  return (
    <div className="flex items-center mt-4">
      <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
      <span className="truncate">{event.name}</span>
      <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
      <span className="font-semibold xl:ml-auto">
        {ordinalNumber(new Date(event.due).getDate())}
      </span>
    </div>
  );
};

export default EventItem;
