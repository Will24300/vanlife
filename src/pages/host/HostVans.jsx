import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../util";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <section className="p-8">
      <h2 className="font-bold text-[32px] mb-5">Your listed vans</h2>
      {vans ? (
        <div className="flex flex-col gap-5">
          {vans.map((van) => (
            <Link to={van.id} key={van.id}>
              <div className="bg-white flex justify-start items-center gap-5 rounded">
                <img src={van.imageUrl} alt="van image" className="w-20" />
                <div>
                  <h3 className="font-semibold">{van.name}</h3>
                  <p className="text-[16px] text-[#4D4D4D]">${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default HostVans;
