import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";
import "./server";
import VanDetailsLayout from "./components/VanDetailsLayout";
import Details from "./pages/vanDetails/Details";
import Photos from "./pages/vanDetails/Photos";
import Princing from "./pages/vanDetails/Princing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<Details />} />
              <Route path="photo" element={<Photos />} />
              <Route path="pricing" element={<Princing />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
