import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center">
      <p className="font-bold text-3xl w-3/5 mb-5">
        Sorry, the page you were looking for was not found
      </p>
      <Link
        to={"/"}
        className="py-1.5 w-3/5 text-white bg-black text-center rounded"
      >
        Return to home
      </Link>
    </section>
  );
}

export default NotFound;
