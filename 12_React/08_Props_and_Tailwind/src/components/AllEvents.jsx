import React from "react";
import RecentEvent from "./RecentEvent";

const AllEvents = (props) => {
  let events = [
    {
      "event": {
        title: "The Largest Innovation Hackathon",
        description: "The Grand Event in the growing Era",
        venue: "Main Building, LNCT Bhopal",
        date: "2025-04-28",
        event_id: 2,
      },
    },
    {
      "event": {
        title: "Smart India Innovation Day",
        description:
          "The Event is begin organized by Ministry of Innovation and IT for the freshers",
        venue: "LNCT Main Building",
        date: "2025-04-26",
        event_id: 3,
      },
    },
    {
      "event": {
        title: "AI Innovation",
        description: "The Grand Event in AI era", //Venue fr third event will be default value mentioned in props
        date: "2025-04-28",
        event_id: 1,
      },
    },
  ];
  return (
    <>
      <h1>Upcoming Events</h1>
      <div className="flex">
        {events.map(({ event }) => (
          <RecentEvent
            key={event.event_id}
            title={event.title}
            description={event.description}
            venue={event.venue}
            date={event.date}
          ></RecentEvent>
        ))}
      </div>
    </>
  );
};

export default AllEvents;
