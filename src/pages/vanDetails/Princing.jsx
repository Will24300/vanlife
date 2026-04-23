import React from "react";
import { useOutletContext } from "react-router";

function Princing() {
  const { price } = useOutletContext();
  return (
    <div>
      <p>
        <span className="text-[24px] font-semibold">${price.toFixed(2)}</span>
        /day
      </p>
    </div>
  );
}

export default Princing;
