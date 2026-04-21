import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Vans() {
  const [data, setData] = useState(null);
  const [vanType, setVanType] = useState("simple");
  const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  const types = ["Simple", "Rugged", "Luxury"];
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((d) => setData(d.vans));
  }, []);

  const handleClick = (name) => {
    setVanType(name.toLowerCase());
  };

  const filteredData = data.filter((d) => d.type !== vanType);

  return (
    <>
      <Navbar />
      <section className="p-8 bg-[#fff7ed] min-h-[70vh]">
        <div>
          <h2 className="font-bold text-[32px]">Explore our van options</h2>
          <div className="flex justify-between items-center">
            <ul className="flex justify-between items-center gap-5 my-5">
              {types.map((type, index) => (
                <li
                  key={index}
                  className="bg-[#FFEAD0] py-1 px-5 rounded cursor-pointer"
                  onClick={() => handleClick(type)}
                >
                  {type}
                </li>
              ))}
            </ul>
            <p className="underline cursor-pointer">Clear filter</p>
          </div>
        </div>
        {filteredData && (
          <div className="grid grid-cols-2 gap-5 mt-3">
            {filteredData.map((van) => (
              <div key={van.id}>
                <img
                  src={van.imageUrl}
                  alt={van.description}
                  className="rounded-2xl"
                />
                <div>
                  <div className=" font-semibold text-[20px] flex justify-between  my-3">
                    <p>{van.name}</p>
                    <p className="leading-5">
                      ${van.price} <br />{" "}
                      <span className="text-sm font-normal">/day</span>
                    </p>
                  </div>
                  <button
                    style={{
                      backgroundColor: colors[van.type] && colors[van.type],
                    }}
                    className="text-white py-1 px-5 rounded"
                  >
                    {van.type}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Vans;
