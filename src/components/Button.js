import React, { useEffect, useState } from "react";
import { SoundPictur as ReactComponent } from "../assets/noun-sound-1985240.svg";
//import Sound from "../assets/noun-sound-1985240.svg";

function Button(props) {
  const darkColor = "grey";
  const lightColor = "#FFF8DC";
  const [backgroundColor, changeBackgroundColor] = useState(lightColor);
  const [textColor, changeTextColor] = useState(darkColor);
  const [buttonSelected, changeButtonSelected] = useState(false);

  useEffect(() => {
    if (buttonSelected) {
      changeBackgroundColor(darkColor);
      changeTextColor(lightColor);
      console.log(`${props.text} was turned OFF`);
    } else {
      changeBackgroundColor(lightColor);
      changeTextColor(darkColor);
      console.log(`${props.text} was turned ON`);
    }
  }, [buttonSelected]);

  const circle = {
    cusor: "pointer",
    display: "flex",
    height: "80px",
    width: "80px",
    margin: "30px",
    backgroundColor: backgroundColor,
    borderRadius: "50%",
    border: "3px lightgrey solid",
  };

  const footer = {
    display: "flex",
    height: "0px",
    //backgroundColor: "white",
  };

  const text = {
    display: "flex",
    cusor: "pointer",
    //justifyItems: "center",
    marginLeft: "7px",
    marginTop: "10px",
    color: textColor,
  };

  function onClick() {
    changeButtonSelected(!buttonSelected);
  }

  return (
    <div style={footer}>
      <div onClick={onClick} style={circle}>
        {/* <h1 style={text}>{props.text}</h1> */}
        <img style={text} src={props.image} alt={props.alt}></img>
      </div>
    </div>
  );
}

export default Button;
