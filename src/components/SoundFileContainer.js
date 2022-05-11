import React from "react";

function SoundFile(props) {
  const text = {
    color: "white",
    fontSize: "20px",
  };

  return (
    <>
      <h4 style={text}>{props.fileName}</h4>
    </>
  );
}

function SoundFileContainer() {
  const fileNames = [
    "Hairbrush.mov",
    "Hairbrush.mov",
    "Removing pearls.mp4",
    "nighttime story.mp4",
    "Cutting paper.mp4",
    "Shooping Online.mp4",
    "TappingTapping_3.mp4",
    "My perfume collectioin.mp4",
    "Smelling different chocolates.mp4",
    "unpacking my bag2.mp4",
    "reading a book.mp4",
    "reading a book2.mp4ß",
  ];
  const soundFiles = fileNames.map((e) => <SoundFile fileName={e} />);
  const title = {
    color: "white",
    marginLeft: "70px",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //alignItems: "center",
    marginLeft: "70px",
    border: "1px solid grey",
    height: "607px",
    width: "400px",
    paddingLeft: "20px",
    overflow: "scroll",
  };

  return (
    <>
      <h4 style={title}>Choose a touching sound</h4>
      <div style={containerStyle}>{soundFiles}</div>
    </>
  );
}

export default SoundFileContainer;
