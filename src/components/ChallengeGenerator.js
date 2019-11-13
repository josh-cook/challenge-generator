import React, { Component } from "react";
import Button from "./Button";
import Items from "./Items";
import Rule from "./Rule";
import adjectives from "../json/adjectives.json";
import characters from "../json/characters.json";
import colours from "../json/colours.json";
import copyToClipboard from "../lib/copyToClipboard";
import { getDailySeed, getURLSeed } from "../lib/getSeeds";
import getRandomWithSeed from "../lib/getRandomWithSeed";
import generateRandomSeed from "../lib/generateRandomSeed";
import items from "../json/items.json";
import rooms from "../json/rooms.json";

const getCurrentSeed = () => {
  const urlSeed = getURLSeed();
  return urlSeed === null ? getDailySeed() : urlSeed;
};

export default class ChallengeGenerator extends Component {
  state = {
    seed: getCurrentSeed(),
    copied: false,
    daily: getURLSeed() === null
  };

  timerId = null;

  componentDidMount() {
    window.addEventListener("popstate", this.handleBackButton);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handleBackButton);
    clearTimeout(this.timerId);
  }

  handleBackButton = () => {
    this.setState({ seed: getCurrentSeed(), daily: getURLSeed() === null });
  };

  handleGenerate = () => {
    const newSeed = generateRandomSeed();

    this.setState({ seed: newSeed, daily: false });
    history.pushState(null, "", `?seed=${newSeed}`);
  };

  handleShare = () => {
    copyToClipboard(window.location.href);

    clearTimeout(this.timerId);

    this.setState({ copied: true });

    this.timerId = setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  handleDaily = () => {
    history.pushState(null, "", window.location.pathname);
    this.setState({ daily: true, seed: getDailySeed() });
  };

  render() {
    const { copied, daily, seed } = this.state;

    const [playableCharacter] = getRandomWithSeed(characters, seed);
    const [endingRoom] = getRandomWithSeed(rooms, seed);
    const [colour] = getRandomWithSeed(colours, seed);
    const [adjective] = getRandomWithSeed(adjectives, seed);
    const startingItems = getRandomWithSeed(items, seed, 3);

    return (
      <>
        <div className="page-title">
          <h1>BoI: Challenge Generator</h1>
        </div>
        <div className="challenge-title">
          <span id="title-adjective">{adjective}</span>{" "}
          <span id="title-colour" style={{ color: colour.hex }}>
            {colour.name}
          </span>{" "}
          <span id="title-character">{playableCharacter}</span>
        </div>
        <div className="container">
          <Rule type="Challenge #">{seed}</Rule>
          <Rule type="Character">{playableCharacter}</Rule>
          <Rule type="Starting Items">
            <Items items={startingItems} />
          </Rule>
          <Rule type="Room">{endingRoom}</Rule>
        </div>
        <div className="buttons">
          <Button onClick={this.handleGenerate}>Generate Seed</Button>{" "}
          <Button onClick={this.handleShare}>Share</Button>{" "}
          {!daily && <Button onClick={this.handleDaily}>Daily</Button>}
        </div>
        {copied && <div className="alert-box">URL has been copied</div>}
      </>
    );
  }
}
