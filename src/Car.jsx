import React from "react";

const Car = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "green",
          textTransform: "uppercase"
        }}
      >
        Hello {props.title + "!"} {props.year}
        {props.children}
      </h1>
    </div>
  );
};

export default Car;
