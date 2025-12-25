const EventCard = ({ title, description, venue, date, votes }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "1rem",
          margin: "1rem 0",
          borderRadius: "8px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1>{title}</h1>
        <p>
          <strong>Description:{description}</strong>
        </p>
        <p>
          <strong>Event Venue:{venue}</strong>
        </p>
        <p>
          <strong>Date of Event:{date}</strong>
        </p>
        <button>Votes : {votes}</button>
      </div>
    </>
  );
};

export default EventCard;
