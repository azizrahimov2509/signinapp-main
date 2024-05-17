import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Home from "../pages/home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [data, setData] = useState([]);


  return (
    <div>
      <Header />

      <main>
        <Outlet/>
      </main>
    </div>
  );
}
