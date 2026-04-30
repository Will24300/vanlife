import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, {
  loader as vanDetailsLoader,
} from "./pages/vans/VanDetails";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVanDetails, {
  loader as hostVansLoaderDetail,
} from "./pages/host/HostVanDetails";
import VanDetailsLayout from "./components/VanDetailsLayout";
import Details from "./pages/vanDetails/Details";
import Photos from "./pages/vanDetails/Photos";
import Princing from "./pages/vanDetails/Princing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="login" element={<Login />} />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVansLoaderDetail}
        >
          <Route
            index
            element={<Details />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photo"
            element={<Photos />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<Princing />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
