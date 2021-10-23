import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    Person: {
      fullName: "Med Hichem Lemsi",
      Bio: "...",
      imgSrc: (
        <img
          src="./profilePhoto.jpg"
          alt="profilePhoto"
          style={{ width: 200 }}
        />
      ),
     Profession: "FullStack JS",
    },
    show: true,
    count: 0,
  };
  toggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const showInfo = this.state.show ? (
      <div>
        <h1>Personal Infos</h1>
        <div>{this.state.Person.imgSrc}</div>
        <div>
          <p>
            Name:
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {this.state.Person.fullName}
            </span>
          </p>
          <p>
            Bio:
            <span style={{ fontWeight: "bold" }}> {this.state.Person.Bio}</span>
          </p>
          <p>
            Profession:
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {this.state.Person.Profession}
            </span>
          </p>
        </div>
      </div>
    ) : (
      <div></div>
    );
    return (
      <div className="App">
        {showInfo}
        <button onClick={this.toggleClick}>Show/Hide</button>
        <div>Time:{this.state.count} seconds</div>
      </div>
    );
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default App;
