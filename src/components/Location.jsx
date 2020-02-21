import React from "react";

const Location = props => {
  if (!props.location) {
    return null;
  }
  return (
    <>
      <h4>МКС сейчас находится тут:</h4>
      <hr />
      <p>
        <b> Кординаты широты :</b> {props.location.iss_position.longitude}
      </p>
      <p>
        <b> Кординаты долготы :</b> {props.location.iss_position.latitude}
      </p>
    </>
  );
};

export default Location;
