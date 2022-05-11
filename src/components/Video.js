import React, { useEffect } from "react";
import Cam from "react-webcam";
import Footer from "./Footer";

function Video() {
  const camContainer = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  const cam = {
    display: "flex",
    height: "90%",
    width: "90%",
    marginTop: "50px",
  };

  return (
    <div style={camContainer}>
      <Cam style={cam} />
    </div>
  );
}

export default Video;
