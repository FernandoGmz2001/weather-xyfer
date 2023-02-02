import React from "react";
import "../../styles/Home.css";
import Weather from "../common/Weather/Weather";

function Home() {
  return (
    <main className="main">
      <p className="main__location">Nuevo Laredo</p>
      <Weather />
    </main>
  );
}

export default Home;
