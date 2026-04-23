import { ArrowLeft } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Link, useParams, Outlet } from "react-router";
import VanDetailsLayout from "../../components/VanDetailsLayout";

function HostVanDetails() {
  const { id } = useParams();
  const [van, setVanDetail] = useState(null);
  const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((d) => setVanDetail(d.vans));
  }, [id]);

  // console.log(van);

  return (
    <section className="px-8 min-h-[60vh] mb-7">
      <Link
        to={".."}
        relative="path"
        className="flex justify-start items-center gap-1 my-10"
      >
        <ArrowLeft size={15} color="gray" />
        <span className="underline">Back to all vans</span>
      </Link>
      {van ? (
        <div className="bg-white p-5 rounded">
          <div className="flex justify-start items-center gap-5">
            <img src={van.imageUrl} alt="Van image" className="w-40" />
            <div>
              <button
                style={{ backgroundColor: colors[van.type] }}
                className="text-white py-1 px-5 rounded"
              >
                {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
              </button>
              <h2 className="font-bold text-[26px] my-2">{van.name}</h2>
              <p>
                <span className="font-bold">${van.price}</span>/day
              </p>
            </div>
          </div>
          <nav className="flex justify-start items-center gap-5 my-5">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold text-black" : "text-[#4D4D4D]"
              }
              to={`.`}
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold text-black" : "text-[#4D4D4D]"
              }
              to={`pricing`}
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold text-black" : "text-[#4D4D4D]"
              }
              to={`photo`}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet
            context={{
              name: van.name,
              desc: van.description,
              image: van.imageUrl,
              type: van.type,
              price: van.price,
            }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
// naem = van.name, van.description, van.imageUrl, van.type, van.price

export default HostVanDetails;
