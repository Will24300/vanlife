import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router";
import { ArrowBigLeft } from "lucide-react";
import { ArrowLeft } from "lucide-react";

function VanDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const location = useLocation();
  // console.log(location);

  const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d.vans));
  }, [id]);

  if (!data) {
    return <h2 className="p-8">Loading van details...</h2>;
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <>
      <section className="p-8">
        <Link
          to={`..${search}`}
          relative="path"
          className="flex justify-start items-center gap-1 my-10"
        >
          <ArrowLeft size={15} color="gray" />

          <span className="underline">Back to {type} vans</span>
        </Link>
        <div>
          <img src={data.imageUrl} alt="van image" className="rounded" />
          <button
            style={{ backgroundColor: colors[data.type] }}
            className="text-white py-1 px-5 mt-15 mb-2 rounded"
          >
            {data.type.slice(0, 1).toUpperCase() + data.type.slice(1)}
          </button>
          <h2 className="font-bold text-[32px]">{data.name}</h2>
          <p className="font-bold my-5">
            ${data.price} <span className="font-normal">/day</span>
          </p>
          <p className="text-[16px] text-[#161616]">{data.description}</p>
          <button className="bg-[#FF8C38] text-white py-1.5 px-8 cursor-pointer rounded my-5 ">
            Rent this van
          </button>
        </div>
      </section>
    </>
  );
}

export default VanDetails;
