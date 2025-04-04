
const events = [
    {
      "eventId": 1,
      "title": "Tech Conference 2025",
      "date": "2025-06-15",
      "venue": "Convention Center, New York",
      "Field": "Technology"
    },
    {
      "eventId": 2,
      "title": "AI & ML Summit",
      "date": "2025-07-10",
      "venue": "Silicon Valley, California",
      "Field": "AI"
    },
    {
      "eventId": 3,
      "title": "Cybersecurity Workshop",
      "date": "2025-08-05",
      "venue": "Online Webinar",
      "Field": "Cybersecurity"
    },
    {
      "eventId": 4,
      "title": "Blockchain Expo",
      "date": "2025-09-20",
      "venue": "London Tech Hub",
      "Field": "Blockchain"
    },
    {
      "eventId": 5,
      "title": "Startup Pitch Night",
      "date": "2025-10-12",
      "venue": "Bangalore, India",
      "Field": "Entrepreneurship"
    },
    {
      "eventId": 6,
      "title": "Web Dev Bootcamp",
      "date": "2025-11-18",
      "venue": "San Francisco, USA",
      "Field": "Web"
    },
    {
      "eventId": 7,
      "title": "Deep Learning Symposium",
      "date": "2025-12-05",
      "venue": "Boston AI Lab",
      "Field": "AI"
    },
    {
      "eventId": 8,
      "title": "Big Data Analytics Meet",
      "date": "2026-01-22",
      "venue": "Berlin, Germany",
      "Field": "Big Data"
    },
    {
      "eventId": 9,
      "title": "Cloud Computing Forum",
      "date": "2026-02-14",
      "venue": "Sydney, Australia",
      "Field": "Cloud"
    },
    {
      "eventId": 10,
      "title": "IoT Future Trends",
      "date": "2026-03-10",
      "venue": "Tokyo, Japan",
      "Field": "IoT"
    },
    {
      "eventId": 11,
      "title": "Ethical Hacking Workshop",
      "date": "2026-04-05",
      "venue": "Delhi, India",
      "Field": "Cybersecurity"
    },
    {
      "eventId": 12,
      "title": "E-Commerce Growth Strategies",
      "date": "2026-05-18",
      "venue": "Dubai, UAE",
      "Field": "Entrepreneurship"
    },
    {
      "eventId": 13,
      "title": "ReactJS Hackathon",
      "date": "2026-06-07",
      "venue": "Remote Event",
      "Field": "Web"
    },
    {
      "eventId": 14,
      "title": "Python for Data Science",
      "date": "2026-07-12",
      "venue": "Chicago, USA",
      "Field": "AI"
    },
    {
      "eventId": 15,
      "title": "AR & VR Innovations",
      "date": "2026-08-20",
      "venue": "Toronto, Canada",
      "Field": "Technology"
    },
    {
      "eventId": 16,
      "title": "Quantum Computing Summit",
      "date": "2026-09-30",
      "venue": "Zurich, Switzerland",
      "Field": "Technology"
    },
    {
      "eventId": 17,
      "title": "5G & Edge Computing",
      "date": "2026-10-25",
      "venue": "Seoul, South Korea",
      "Field": "Cloud"
    },
    {
      "eventId": 18,
      "title": "Smart Cities & IoT",
      "date": "2026-11-15",
      "venue": "Paris, France",
      "Field": "IoT"
    },
    {
      "eventId": 19,
      "title": "Neural Networks in Finance",
      "date": "2026-12-08",
      "venue": "Hong Kong",
      "Field": "AI"
    },
    {
      "eventId": 20,
      "title": "AI for Healthcare",
      "date": "2027-01-20",
      "venue": "Mumbai, India",
      "Field": "AI"
    }
  ];


  
  //filter
  const aiEvents = events.filter((e)=> e.Field === 'AI');

  aiEvents.forEach((aie)=>{
    console.log(aie);
  })


  //map 
const arr = [1,2,3,4,5,6,7,8,9,10]
const arr_10 = arr.map((element)=>element+10)
console.log(arr_10);

//reduce

const prod = arr.reduce((acc,curr)=>(acc*curr));
console.log(prod);

const sum = arr.reduce((acc,cv)=>{
  return acc+cv;
},45) //here this 0 defines the initial value of the acc, or accumulator

console.log(sum);