import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Router,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Layout from "./layout";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Informs from "./pages/informs";

function App() {
  function Redirect({ children }) {
    let user = JSON.parse(localStorage.getItem("user")) ?? false;

    return user ? children : <Navigate to="/" />;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          path="/layout"
          element={
            <Redirect>
              <Layout />
            </Redirect>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="infos" element={<Informs />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
