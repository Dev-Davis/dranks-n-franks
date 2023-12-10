import React from "react";
import Menu from "../Menu/Menu";

import './Home.css'

export default function Home() {
  return (
    <div>
      <h1 className="page-title">Dranks n Franks</h1>
      <hr />
      <img src="https://t4.ftcdn.net/jpg/05/75/61/83/240_F_575618364_dMHK3cD3xrnoJI7F9P8tPjimYIZCOIWU.jpg" className="dogg-background" alt="animated hot dog" />
      <Menu />
    </div>
  );
}
