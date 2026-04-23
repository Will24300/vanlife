import React from "react";
import { NavLink, Outlet, useParams } from "react-router";

function VanDetailsLayout() {
  const { id } = useParams();
  return (
    <>
      <Outlet />
    </>
  );
}

export default VanDetailsLayout;
