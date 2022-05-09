import React, { useEffect, useState } from "react";

function Button(props) {
  const darkColor = "rgb(0, 0, 34)";
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
    height: "100px",
    //backgroundColor: "white",
  };

  const text = {
    display: "flex",
    cusor: "pointer",
    marginLeft: "30px",
    color: textColor,
  };

  function onClick() {
    changeButtonSelected(!buttonSelected);
  }

  return (
    <div style={footer}>
      <div onClick={onClick} style={circle}>
        <h1 style={text}>{props.text}</h1>
      </div>
    </div>
  );
}

export default Button;
