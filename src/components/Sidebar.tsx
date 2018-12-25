import * as React from "react";
import logo from "../assets/logo.png";

class Sidebar extends React.Component<{}, {}> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="sidebar">
        <div
          style={{
            alignItems: "strech",
            display: "flex",
            flexDirection: "column",
            padding: "10px"
          }}
        >
          <img src={logo} style={{ width: "100%", height: "100%" }} />
          <h3>Pernambuco Construtora</h3>
        </div>
        <hr />

        <p
          style={{
            fontWeight: "bold",
            paddingLeft: "16px"
          }}
        >
          Menu
        </p>

        <a href="#home">
          <i className="fa fa-fw fa-home" /> Home
        </a>
        <a href="#services">
          <i className="fa fa-fw fa-wrench" /> Services
        </a>
        <a href="#clients">
          <i className="fa fa-fw fa-user" /> Clients
        </a>
        <a href="#contact">
          <i className="fa fa-fw fa-envelope" /> Contact
        </a>
      </div>
    );
  }
}

export default Sidebar;
