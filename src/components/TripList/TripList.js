import { useEffect, useState } from "react";

import "./TripList.css";

const TripList = () => {
  // eslint-disable-next-line no-unused-vars
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTrips(json));
  }, [url]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
