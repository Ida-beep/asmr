//import Sketch from "./P5/Sketch";
import Footer from "./components/Footer.js";
import Video from "./components/Video";
import Information from "./components/Information";
import Information2 from "./components/Information-2";

/**
 * App is responsible for connecting all components of the UI together with the P5 sketch
 * that return a value that will warp the sound
 */

function App() {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    widht: "100%",
    height: "100%",
    //backGroundColor: "black",
  };

  const horisontalStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "1000px",
    width: "100%",
  };

  return (
    <div style={pageStyle}>
      <div style={horisontalStyle}>
        <Information />
        <Video />
        <Information2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
