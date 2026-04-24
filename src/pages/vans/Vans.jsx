import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get("type");

  const [data, setData] = useState(null);
  // const [vanType, setVanType] = useState("");
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
    // setVanType(name.toLowerCase());
    setSearchParams({ type: name });
  };
  let filteredData;

  if (data && filterType) {
    filteredData = data.filter((d) => d.type === filterType.toLowerCase());
  } else {
    filteredData = data;
  }

  return (
    <>
      <section className="p-8 bg-[#fff7ed] min-h-[70vh]">
        <div>
          <h2 className="font-bold text-[32px]">Explore our van options</h2>
          <div className="flex justify-between items-center">
            <ul className="flex justify-between items-center gap-5 my-5">
              {types.map((type, index) => {
                const isSelected = filterType === type;
                return (
                  <li
                    key={index}
                    onClick={() => handleClick(type)}
                    className={`py-1 px-5 rounded cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#E17654] text-white" // Active styles
                        : "bg-[#FFEAD0] text-black" // Inactive styles
                    }`}
                  >
                    {type}
                  </li>
                );
              })}
            </ul>
            {filterType && (
              <p
                className="underline cursor-pointer"
                onClick={() => setSearchParams({})}
              >
                Clear filter
              </p>
            )}
          </div>
        </div>
        {filteredData && (
          <div className="grid grid-cols-2 gap-5 mt-3">
            {filteredData.map((van) => (
              <Link
                to={`${van.id}`}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: filterType,
                }}
                key={van.id}
              >
                <div>
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
                        backgroundColor: colors[van.type],
                      }}
                      className="text-white py-1 px-5 rounded cursor-pointer"
                    >
                      {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Vans;
