const published = true;
let organizer = "Swagatika Lenka";
var eventDate = "25 Dec 2025";
let eventVenue;
console.log(published);

// published = false; // ⚠️This is not allowed at all 
organizer = "Simmi Sheetal Jain";
eventDate = "25 Apr 2025";

console.table([
    organizer,
    eventDate,
    published,
    eventVenue
])

/*
Both `var` and `let` allow variable reassignment, but `var` is generally avoided due to its function-scoping behavior, which can lead to unintended issues. Instead, `let` (block-scoped) is preferred for better code clarity and predictability.
*/