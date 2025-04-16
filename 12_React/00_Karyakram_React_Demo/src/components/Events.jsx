import React from "react";
import { FaUsers, FaClock } from "react-icons/fa";
import EventCard from "./EventCard";
const Event = (props) => {
  let events = [
    {
      "events": {
        "title": "The Largest Innovation Hackathon",
        "description": "The Grand Event in the growing Era",
        "venue": "Main Building, LNCT Bhopal",
        "date": "2025-04-28",
        "published": false,
        "event_id": 2,
        "host_id": 1
      },
      "votes": 0
    },
    {
      "events": {
        "title": "Smart India Innovation Day",
        "description": "The Event is begin organized by Ministry of Innovation and IT for the freshers",
        "venue": "LNCT Main Building",
        "date": "2025-04-26",
        "published": true,
        "event_id": 3,
        "host_id": 1
      },
      "votes": 0
    },
    {
      "events": {
        "title": "AI Innovation",
        "description": "The Grand Event in AI era",
        "venue": "LNCT Bhopal",
        "date": "2025-04-28",
        "published": true,
        "event_id": 1,
        "host_id": 1
      },
      "votes": 1
    }
  ];
  return (
    <>
      <div>
        <h1>Upcoming Events</h1>
        { events.map(({events,votes}) => (
          <EventCard
            key={events.event_id}
            title={events.title}
            description={events.description}
            venue={events.venue}
            date={events.date}
            votes={votes}></EventCard>
        ))}
      </div>
    </>
  );
};

export default Event;
