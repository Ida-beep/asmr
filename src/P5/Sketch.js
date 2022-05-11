/* import React from "react";
import Sketch from "react-p5";
import "./libraries/p5.serialport";
import "./libraries/p5.sound";
import "./libraries/p5";

export default (props) => {
  let serial;
  let latestData = "waiting for data";
  let song;
  let dataVolume = 1;

  function preload() {
    song = loadSound("assets/murmuration.mp3");
  }
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);

    serial = new p5.SerialPort();

    serial.list();
    serial.open("/dev/tty.SLAB_USBtoUART");

    serial.on("connected", serverConnected);

    serial.on("list", gotList);

    serial.on("data", gotData);

    serial.on("error", gotError);

    serial.on("open", gotOpen);

    serial.on("close", gotClose);
  };

  function serverConnected() {
    console.log("Connected to Server");
  }

  function gotList(thelist) {
    console.log("List of Serial Ports:");

    for (let i = 0; i < thelist.length; i++) {
      console.log(i + " " + thelist[i]);
    }
  }

  function gotOpen() {
    console.log("Serial Port is Open");
  }

  function gotClose() {
    console.log("Serial Port is Closed");
    latestData = "Serial Port is Closed";
  }

  function gotError(theerror) {
    console.log(theerror);
  }

  function gotData() {
    let currentString = serial.readLine();
    trim(currentString);
    if (!currentString) return;
    console.log(currentString);
    latestData = currentString;

    dataVolume = map(latestData, 0.0, 2, 0.0, 1);
    song.play();
    song.setVolume(dataVolume);
  }

  const draw = (p5) => {
    p5.background(255, 255, 255);
    p5.fill(0, 0, 0);
    p5.text(latestData, 10, 10);
  };

  return <Sketch setup={setup} draw={draw} />;
};
 */
