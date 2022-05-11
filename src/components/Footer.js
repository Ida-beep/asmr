import React from "react";
import Button from "./Button.js";
import SoundImg from "../assets/noun-sound-1985240.svg";
import CameraImg from "../assets/noun-no-camera-4808901.svg";
import TouchImg from "../assets/noun-hand-touch-72831.svg";

function Footer() {
  const btnSymbol = [SoundImg, CameraImg, TouchImg];
  const btns = btnSymbol.map((e) => {
    return <Button alt={"some picture"} image={e} />;
  });
  const footer = {
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.7)",
  };

  return (
    <>
      <div style={footer}>{btns}</div>
    </>
  );
}

export default Footer;
