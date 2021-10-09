import React from 'react';
import EventItem from './EventItem'

const EventsList = ({ eventsList }) => {
  return ( 
    <div className="border-t border-gray-200 p-5 pt-0">
      {
        eventsList.map((i, event) => 
          <EventItem key={i} event={event}/>
        )
      }
    </div>
   );
}
 
export default EventsList;