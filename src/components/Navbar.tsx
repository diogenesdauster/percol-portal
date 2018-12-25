import * as React from "react";

class Navbar extends React.Component<{}, {}> {
  public constructor(props: any) {
    super(props);
  }

  public render(): React.ReactElement<{}> {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div id="navbar" style={{ alignItems: "center" }}>
          <a
            style={{
              color: "white",
              display: "block",
              fontSize: "17px",
              padding: " 14px 16px",
              textDecoration: "none"
            }}
          >
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{
                display: "block",
                fontSize: "2em"
              }}
            />
          </a>

          <div style={{ flexGrow: 1 }} />
          <h3>Bem Vindo - Diógenes Dauster</h3>
          <a
            style={{
              color: "white",
              display: "block",
              fontSize: "17px",
              padding: " 14px 16px",
              textDecoration: "none"
            }}
          >
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{
                fontSize: "2em",
                paddingLeft: "10px",
                textAlign: "center"
              }}
            />
          </a>
        </div>
        <div className="header">
          <h2>Boletos</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
