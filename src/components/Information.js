import React from "react";
import Logo from "../assets/Logo2.svg";
import SoundFileContainer from "./SoundFileContainer";

function Information() {
  const logo = {
    display: "flex",
    justfifyContent: "flex-end",
    //transform: "scale(0.2)",
    width: "200px",
    height: "200px",
    marginLeft: "50px",
    marginLeft: "190px",
  };

  const title = {
    color: "white",
    marginTop: "0px",
    marginLeft: "230px",
    width: "200px",
    //justfifyItems: "center",
    alignSelf: "center",
  };
  const size = {
    display: "flex",
    flexDirection: "column",
    width: "400px",
  };

  return (
    <div style={size}>
      <img style={logo} src={Logo} alt={"logo"}></img>
      <h1 style={title}>Plug-n-Pet</h1>
      <SoundFileContainer />
    </div>
  );
}

export default Information;
