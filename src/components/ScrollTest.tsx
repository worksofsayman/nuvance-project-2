import React from "react";

const ScrollTest: React.FC = () => {
  return (
    <div
      style={{
        height: "200vh",
        background: "linear-gradient(to bottom, red, blue)",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "white",
        }}
      >
        SCROLL TEST - TOP SECTION
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "white",
        }}
      >
        SCROLL TEST - BOTTOM SECTION
      </div>
    </div>
  );
};

export default ScrollTest;
