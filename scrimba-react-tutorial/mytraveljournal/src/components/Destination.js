import React from "react";
import Pin from "../images/pin.png";

export default function Destination(props) {
  return (
    <div className="card">
      <img src={props.image} alt="..." width="125" height="168"></img>
      <div className="card-content">
        <div className="card-location-info">
          <img src={Pin} alt="" width="7" height="10"></img>
          <span>
            <p>{props.country.toUpperCase()}</p>
            <a href={props.googleMapsLink}>View on Google Maps</a>
          </span>
        </div>
        <h2>{props.destination}</h2>
        <p className="card-dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
