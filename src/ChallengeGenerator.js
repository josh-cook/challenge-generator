import React, { Component } from 'react'
import getCurrentSeed from "./lib/getCurrentSeed";

export class ChallengeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      seed: getCurrentSeed(),
    };
  }
  
  render() {
    return (
      <div>
        {this.state.seed}
      </div>
    )
  }
}

export default ChallengeGenerator
