import React from "react";
import "../../styles/Home.css";
import Header from "../common/Header/Header";
import Weather from "../common/Weather/Weather";

function Home() {
  return (
    <main className="main">
      <Header />
      <Weather />
    </main>
  );
}

export default Home;
