import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    ECFS: 0
  };

  componentDidMount() {
    this.calculateECFS();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateECFS();
    }
  }

  calculateECFS = () => {
    const { monthly } = this.props;

    this.setState({ ECFS: monthly * 0.3 });
    
  };

  calculateStimatedAnualSavings = () => {
    const { employees } = this.props;
    const StimatedAnualSavings = (employees * 1337 + this.state.ECFS);

    return <p className="numbers">${StimatedAnualSavings}</p>;
  };

  amountECFS = () => {
    return <p className="numbers">${this.state.ECFS}</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild 
          func={this.amountECFS()} 
          text="Estimated cost food savings" 
        />
        <DisplayChild
          func={this.calculateStimatedAnualSavings()}
          text="Your estimated annual savings"
        />
      </div>
    );
  }
}

Display.propTypes = {
  employees: PropTypes.number.isRequired,
  monthly: PropTypes.number.isRequired
};

export default Display;