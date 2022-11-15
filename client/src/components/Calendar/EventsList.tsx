import React from "react";
import EventItem from "./EventItem";
import { Event } from "../../types/Event";
type Props = {
  eventsList: Array<Event>;
};
const EventsList = ({ eventsList }: Props) => {
  return (
    <div className="border-t border-gray-200 p-5 pt-0">
      {eventsList.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
