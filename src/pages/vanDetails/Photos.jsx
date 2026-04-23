import React from "react";
import { useOutletContext } from "react-router";

const Photos = () => {
  const { image } = useOutletContext();
  return (
    <div>
      <img src={image} alt="Van image" className="w-25 rounded" />
    </div>
  );
};

export default Photos;
