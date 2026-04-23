import React from "react";
import { Outlet } from "react-router";
import HostNav from "./HostNav";

function HostLayout() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
}

export default HostLayout;
