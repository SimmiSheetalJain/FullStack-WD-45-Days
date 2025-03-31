const now = new Date();
console.log(now);

console.log(now.toDateString());
console.log(now.toLocaleDateString());

const eventDate = new Date("11-26-2025")
console.log(eventDate.toLocaleString());

const day = now.toLocaleString('default',{
    weekday: "long"
})
console.log(day);
const day1 =  eventDate.toLocaleString('default',{
    weekday: "long"
})
console.log(day1);
