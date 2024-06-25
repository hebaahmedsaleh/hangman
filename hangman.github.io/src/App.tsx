import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout";
import HowToPlay from "./pages/how-to-play";
import GameCategorySelect from "./pages/game-category-select";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="how-to-play" element={<HowToPlay />} />
      <Route path="game" element={<GameCategorySelect />} />
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
