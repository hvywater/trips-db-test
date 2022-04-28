import { useEffect, useState } from "react";

import "./TripList.css"

const TripList = () => {
  // eslint-disable-next-line no-unused-vars
  const [trips, setTrips] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((res) => res.json())
      .then((json) => setTrips(json));
  }, []);

  console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li id={trips.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
