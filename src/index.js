import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.audioPlay = this.audioPlay.bind(this);
  }

  static defaultProp = {
    id: "",
    sfx: "",
    txt: ""
  };

  audioPlay(e) {
    let audio = document.getElementById(this.props.txt);
    audio.play();
    document.getElementById("display").innerHTML = this.props.id.toUpperCase();
  }

  render() {
    return (
      <div className="drum-pad" onClick={this.audioPlay}>
        <p>{this.props.txt}</p>
        <audio id={this.props.txt} className="clip">
          <source src={this.props.sfx} type="audio/mpeg" />
          Audio not supported
        </audio>
      </div>
    );
  }
}

const firstRow = {
  1: [
    "Q",
    "https://freesound.org/data/previews/171/171104_2394245-lq.mp3",
    "Drum_1"
  ],
  2: ["W", "https://freesound.org/data/previews/2/2085_1622-lq.mp3", "Drum_2"],
  3: ["E", "https://freesound.org/data/previews/3/3146_6661-lq.mp3", "Drum_3"],
  4: ["A", "https://freesound.org/data/previews/3/3718_4948-lq.mp3", "Drum_4"]
};

const secondRow = {
  1: [
    "S",
    "https://freesound.org/data/previews/38/38927_14771-lq.mp3",
    "Drum_5"
  ],
  2: [
    "D",
    "https://freesound.org/data/previews/20/20316_100432-lq.mp3",
    "Drum_6"
  ],
  3: [
    "Z",
    "https://freesound.org/data/previews/183/183099_2394245-lq.mp3",
    "Drum_7"
  ],
  4: ["X", "https://freesound.org/data/previews/2/2041_29-lq.mp3", "Drum_8"],
  5: [
    "C",
    "https://freesound.org/data/previews/212/212208_2381150-lq.mp3",
    "Drum_9"
  ]
};

class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.pressHandler = this.pressHandler.bind(this);
  }

  create(o, str) {
    let l = Object.keys(o).length;
    let arr = [];

    for (let i = 1; i < l + 1; i++) {
      arr.push(<Drum id={o[i][2]} sfx={o[i][1]} txt={o[i][0]} key={o[i][0]} />);
    }
    let row = [
      <div className="row" key={str}>
        {arr}
      </div>
    ];
    return row;
  }

  componentWillMount() {
    document.addEventListener("keydown", this.pressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.pressHandler);
  }

  pressHandler(e) {
    let item = document.getElementById(
      String.fromCharCode(e.keyCode).toUpperCase()
    ).parentElement;
    item.classList.toggle("myClass");
    window.setTimeout(function() {
      item.classList.toggle("myClass");
    }, 200);
    item.click();
  }

  render() {
    return (
      <div onKeyPress={this.pressHandler}>
        {this.create(firstRow, "row1")}
        {this.create(secondRow, "row2")}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Machine />, rootElement);
