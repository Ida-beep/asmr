import React from "react";
import Button from "./Button.js";

function Footer() {
  const btnSymbol = ["V", "A", "T"];
  const btns = btnSymbol.map((e) => {
    return <Button text={e} />;
  });
  const footer = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div style={footer}>{btns}</div>
    </>
  );
}

export default Footer;
