import React from "react";
import Cam from "react-webcam";

function Video() {
  const camContainer = {
    display: "flex",
    justifyContent: "center",
  };
  const cam = {
    display: "flex",
    height: "50%",
    width: "50%",
  };

  return (
    <div style={camContainer}>
      <Cam style={cam} />
    </div>
  );
}

export default Video;
