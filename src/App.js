import Sketch from "./P5/Sketch";
import Footer from "./components/Footer.js";
import Video from "./components/Video";

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

  return (
    <div style={pageStyle}>
      <Video />
      <Footer />
      <Sketch />
    </div>
  );
}

export default App;
