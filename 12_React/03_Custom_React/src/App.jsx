function App() {
  let event = {
    "title" : "Project Show-case Hackathon!!",
     "Venue": "Dept. of MCA/BCA, LNCT, Bhopal, M.P.",
     "Date" : "30 April 2025"
  };

  return (
    <>
      <h1>Custom React Part 3</h1>
      <h3>Event Details</h3>
      <h4>{event.title}</h4>
      <p><strong>Date:</strong> {event.Date}</p> {/**We can write only evaluated expression. We cannot write loops, if-else etc.*/}
      <p><strong>Venue:</strong> {event.Venue}</p>
    </>
  )
}

export default App

/**
 *  Why? Think, can you write a if statement inside an object directly?
      *Something like this 
      const reactElement2 = React.createElement(
        'a', 
        { href: 'https://google.com', target: '_blank' }, 
        'Click Me Now!!',
        if( 5 > 0) {
            //code
        } 
      );

      Doing So is not valid and also the if statement is not an evaluated expression.
 */