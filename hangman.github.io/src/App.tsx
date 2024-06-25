import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./HomePage";
import Layout from "./Layout";
import HowToPlay from "./HowToPlay";
import CategoryGamePage from "./CategoryGamePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="how-to-play" element={<HowToPlay />} />
      <Route path="game" element={<CategoryGamePage />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
