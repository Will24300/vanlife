import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { aboutBg } from "../images";

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFF7ED]">
        <img src={aboutBg} alt="about hero img" className="h-[60vh] w-full" />
        <div className="p-10 w3/4">
          <h1 className="font-bold text-[32px]">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="my-5">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. <br /> (Hitch costs extra
            😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-[#FFCC8D] p-8 mt-5">
            <p className="font-semibold mb-5">
              Your destination is waiting. <br />
              Your van is ready.
            </p>
            <button className="bg-black text-white py-2 px-8 rounded cursor-pointer">
              Expore our vans
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
