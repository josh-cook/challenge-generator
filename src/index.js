import ReactDOM from "react-dom";
import React from "react";
import ChallengeGenerator from "./components/ChallengeGenerator";

class ToggleChallengeGenerator extends React.Component {
  state = { visible: true };

  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.state.visible}
          onChange={({ target }) => this.setState({ visible: target.checked })}
        />
        {this.state.visible ? <ChallengeGenerator /> : "ur gei"}
      </>
    );
  }
}

ReactDOM.render(<ToggleChallengeGenerator />, document.getElementById("wrapper"));
