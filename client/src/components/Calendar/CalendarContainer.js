import React, { useState } from "react";
import EventsList from "./EventsList";
import CalendarDateTile from "./CalendarDateTile";
import CalendarNav from "./CalendarNav";
import { eventList } from "./Events";

function CalendarContainer() {
  const [today, setDate] = useState(new Date());
  const [eventsList, setEventsList] = useState(eventList);

  return (
    <div className="col-span-12 sm:col-span-6">
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Schedules</h2>
      </div>
      <div className="mt-5">
        <div className="intro-x box">
          <div className="p-5">
            <CalendarNav today={today} setDate={setDate} />
            <div className="grid grid-cols-7 gap-2 mt-5 text-center">
              <div className="font-medium">Su</div>
              <div className="font-medium">Mo</div>
              <div className="font-medium">Tu</div>
              <div className="font-medium">We</div>
              <div className="font-medium">Th</div>
              <div className="font-medium">Fr</div>
              <div className="font-medium">Sa</div>
              <CalendarDateTile today={today} />
            </div>
          </div>
          <EventsList eventsList={eventsList} setEventsList={setEventsList} />
        </div>
      </div>
    </div>
  );
}
export { CalendarContainer };
