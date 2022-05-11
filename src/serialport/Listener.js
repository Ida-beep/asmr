/* import React from "react";
import io from "socket.io-client";

class Listener extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io("http://localhost:8888");
    //this.socket.open();
    this.socket.on("serialdata", (data) => {
      // we get settings data and can do something with it
      console.log("This is data" + data);
      this.setState({
        settings: data,
      });
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return <h1>I'm a listener!</h1>;
  }
}
export default Listener;
 */
