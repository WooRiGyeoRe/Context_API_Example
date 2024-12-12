import React, { useContext } from "react";
import ColorConsumer from "../contexts/color";
// import ColorContext from "../contexts/color";

const ColorBox = () => {
  console.log("ColorBox 리렌더링됨");
  const { state } = useContext(ColorContext);
  return (
    // <ColorConsumer>
    //{(value) => (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: value.state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: value.state.subColor,
        }}
      />
    </>
    // )}
    // </ColorConsumer>
  );
};

export default ColorBox;