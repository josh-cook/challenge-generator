import { Component } from "react";

export default class Items extends Component {
  render() {
    return this.props.items.map(item => `C${item.id} ${item.name}`).join(", ");
  }
}
