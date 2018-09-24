import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.audioPlay = this.audioPlay.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
  }

  static defaultProp = {
    id: "",
    sfx: "",
    txt: ""
  };

  audioPlay(e) {
    let audio = document.getElementById(this.props.txt);
    audio.play();
    document.getElementById("display").innerHTML = this.props.id;
  }

  pressHandler(e) {
    if (e.keyCode === this.props.key.charCodeAt(0)) {
      this.audioPlay(e);
    }
  }

  render() {
    return (
      <div
        className="drum-pad"
        onClick={this.audioPlay}
        onKeyPress={this.pressHandler}
      >
        {this.props.txt}
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
  }

  render() {
    return;
  }
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<Machine />, rootElement);
