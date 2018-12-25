import * as React from "react";
import "./App.css";
// import bar from "./assets/bar.svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

interface IState {
  isOpen?: boolean;
}

class App extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public componentDidMount(): void {
    if (window.matchMedia("(max-width: 700px)").matches) {
      console.log("dsds");
    } else {
      /* The viewport is less than 400 pixels wide */
      console.log("enrrou");
    }
  }

  public handleClick(): void {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public render() {
    return (
      <div
        className="App"
        style={{
          alignItems: "stretch",
          display: "flex",
          flex: 1,
          flexWrap: "wrap"
        }}
      >
        <Sidebar />

        <>
          <Navbar />
          <div className="main">
            <div className="content">
              <h2>Sidebar with Icons</h2>
              <p>
                This side navigation is of full height (100%) and always shown.
              </p>
              <p>
                Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                concludaturque et eum, altera fabulas ut quo. Atqui causae
                gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
                repudiandae nec et. Inciderint efficiantur his ad. Eum no
                molestiae voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                concludaturque et eum, altera fabulas ut quo. Atqui causae
                gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
                repudiandae nec et. Inciderint efficiantur his ad. Eum no
                molestiae voluptatibus.
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="blog">
              <a href="http://www.fazendosala.com.br/" target="_blank">
                <h4>Conheça nosso blog</h4>
                <img
                  src={require("./assets/logo-fazendosala.png")}
                  alt="Conheça nosso blog Fazendo Sala"
                />
              </a>
            </div>
            <div className="redes-sociais">
              <h4>Redes Sociais</h4>
              <ul>
                <li className="redes-sociais__facebook">
                  <a
                    href="https://www.facebook.com/PernambucoConstrutora"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/pernambucoconstrutora"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/115762047948147991717"
                    target="_blank"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="conheca-nossa-loja">
              <a href="https://goo.gl/maps/N6zjMTcYX852" target="_blank">
                <h4>Conheça nossa loja no Shopping RioMar</h4>
                <p>
                  Temos consultores especializados para lhe atender. Piso L1 - 1
                  Andar
                </p>
              </a>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default App;
