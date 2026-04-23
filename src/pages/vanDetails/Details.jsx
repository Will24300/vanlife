import React from "react";
import { useOutletContext } from "react-router";

function Details() {
  const { name, type, desc } = useOutletContext();

  return (
    <div className="flex flex-col gap-5">
      <h2>
        <span className="font-bold">Name: </span>
        {name}
      </h2>
      <p>
        <span className="font-bold">Category: </span>
        {type.slice(0, 1).toUpperCase() + type.slice(1)}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {desc}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        Public
      </p>
    </div>
  );
}

export default Details;
