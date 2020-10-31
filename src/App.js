import React from "react";
import "./styles.css";
import Car from "./Car";

export default function App() {
  return (
    <div className="App">
      <Car title={"Renault"} year={2019}>
        <p
          style={{
            color: "#000",
            fontSize: "20px",
            textTransform: "none"
          }}
        >
          Color: Brown
        </p>
      </Car>
      <Car title={"Ford"} year={1997} />
    </div>
  );
}
