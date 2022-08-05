import * as React from "react";
import { Component } from "react";

interface GoneNumbersProps {
  numbers: Array<number>;
}

interface GoneNumbersState {}

class GoneNumbers extends Component<GoneNumbersProps, GoneNumbersState> {
  constructor(props: GoneNumbersProps) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  render() {
    let mainComp = [];
    for (let i = this.props.numbers.length - 1; i >= 0; --i) {
      mainComp.push(<p key={i}>{this.props.numbers[i]}</p>);
    }
    return (
      <div className="gone-numbers-container">
      </div>
    );
  }
}

export default GoneNumbers;
