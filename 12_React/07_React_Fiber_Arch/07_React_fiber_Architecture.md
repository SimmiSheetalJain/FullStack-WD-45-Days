# A Note On React Fiber Architecture BY SSJ

## Introduction

* React Fiber is an implementation of React's core algorithm. 
* Its main goal is to increase its sustainability for areas like animation, layout, and gestures. 
* Its main feature is the ability to split rendering into chunks and spread it out over multiple frames. This feature is also called **incremental rendering**.

### Other Key Fearues 
* Ability to pause, abort, or reuse as new updates come in 
* The ability to assign priority to different types of updates

React gives us web-layout but we need to inject javascript to make things functional. For example,  button should respond when clicking. This injection of javascript is known as hydration.

## What is Reconciliation?
It is the algorithm that react uses to differentiate one tree with another to determine which parts need to be changed.

### A Note on 'Update'
An update is usually result of `setState`, eventually results in re-rendering of react app.

The central idea of React's API is to think of updates as if they cause re-rendering of entire app. This idea allows a developer to not worry about how to efficiently transition from any particular state to another. 

One might thing, re-rendering may pose performance and cost challenge. But React has optimizations which creates an appearence of re-rendering entire app without loosing perfomance. 

The bulk of these optimizations are part of the process called reconciliation. 

Reconciliation is the algorithm behind what is popularly understood as "Virtual DOM".

### A high-level description
When we render a React App, tree of nodes that describes the app is generated and saved in memory. 

**Recall this element**
```javascript
const reactElement2 = React.createElement(
  'a',  // First, specify the tag
  { href: 'https://google.com', target: '_blank' }, // Then, pass the attributes as an object
  'Click Me Now!!' // Lastly, provide the children (in this case, just text)
);
```
This tree is then flushed to the rendering environment

**Recall that it was then passed in .render()**

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />    
    {reactElement2} 
  </StrictMode>,
)
```

For better understanding, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (Usually by `useState`), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.  

#### Key Points
* Different components types are assumed to generate sustantially different trees. React will not attempt to diff them, rather replace the old tree completky. 

* Diffing of lists is performed using keys. Keys should be stable, predicatable, and unique. **Example :**
```javascript
const Event = (props) => {
  let events = [
    {
      "events": {
        "title": "The Largest Innovation Hackathon",
        "description": "The Grand Event in the growing Era",
        "venue": "Main Building, LNCT Bhopal",
        "date": "2025-04-28",
        "published": false,
        "event_id": 2, //Event is unique for all events
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
        "event_id": 3, //Event is unique for all events
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
        "event_id": 1, //Event is unique for all events
        "host_id": 1
      },
      "votes": 1
    }
  ];
  //Thus below in the map method the key for the array of event is stable, predictable and unique.
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
```

* In a UI, It's not necessary for every update to be applied instantly. Event sometimes, it is wasteful and causes frames to drop and degrade user experience. 

* Different types of updates have different priorities. For example, an animation updates needs to complete more quickly than , say, an update from database.

* A push-based approach requires the programmer (or the app) to decide how to schedule work. A pull-based approach allows the framework to be smart to make those decision for you(programmer).

## What is a fiber?

A primary goal of the fiber is to enable React to take advantage of scheduling. Specially, we need to be able to

* pause the work and come back to it later.
* assign priority to different types of work.
* reuse previously completed work.
* abort work if it is no longer needed.

