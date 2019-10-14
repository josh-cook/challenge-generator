import React, { Component } from 'react'
import getCurrentSeed from "./lib/getCurrentSeed";
import getRandomWithSeed from "./lib/getRandomWithSeed";
import adjectives from "./json/adjectives.json";
import characters from "./json/characters.json";
import colours from "./json/colours.json";
import items from "./json/items.json";
import rooms from "./json/rooms.json";

export class ChallengeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      seed: getCurrentSeed(),
    };
  }
  render() {
    const { seed } = this.state;
    
    const [playableCharacter] = getRandomWithSeed(characters, seed);
    const [endingRoom] = getRandomWithSeed(rooms, seed);
    const [colour] = getRandomWithSeed(colours, seed);

    return (
      <div>
        {colour.name}, {endingRoom}, {playableCharacter}
      </div>
    );
  }
}

export default ChallengeGenerator
