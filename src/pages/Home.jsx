import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeBg } from "../images";
import { Link } from "react-router";
// import homeBg from "../images";

function Home() {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${homeBg})` }}
        className="h-[80vh] bg-cover bg-repeat text-white flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-5xl font-extrabold text-center">
          You got the travel plans, we got <br /> the travel vans.
        </h1>
        <p className="text-[16px]">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to={"/vans"}
          className="bg-[#FF8C38] text-white py-2 px-10 cursor-pointer rounded"
        >
          Find your van
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home;
