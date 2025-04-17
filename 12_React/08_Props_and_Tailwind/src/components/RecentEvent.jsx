function RecentEvent({title, description, date, venue="Lakshmi Narain College Of Technology, Bhopal"}) {
  return (
    <>
      <div className="rounded-3xl overflow-hidden flex flex-col max-w-xl mx-auto m-3 p-3">
        <a href="#">
          <img
            className="w-full"
            src="https://t3.ftcdn.net/jpg/02/82/79/30/360_F_282793089_BdqraTVQwQu7mkX91JJZZDhGcYRTxuYz.jpg"
            alt="Innovation"
          />
        </a>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 rounded-2xl">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
          >
            {title}
          </a>
          <p className="text-gray-500 text-sm">
            {description} 
          </p>
          <p className="mt-5 text-gray-600 text-xs">
            <span>Date </span>
            {date}
            | in {" "}
            <a
              href="#"
              className="text-xs text-indigo-600 transition duration-500 ease-in-out"
            >
              {venue}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default RecentEvent;
