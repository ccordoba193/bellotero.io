import React, { Component } from "react";
import InputRange from "react-input-range";
import axios from 'axios';
import Display from "./Display";


import "./Config.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {

  constructor(props){
    super(props);
    this.state = ({
      text: {},
      monthlyIngExpend: 10,
      employeesFullTime: 1
    })
  }

  componentDidMount(){
    axios.get('http://localhost:3000/page2.json')
      .then(res => {
          this.setState({ text: res.data})
      })
  }


  handleMonthlyChange = value => {
    this.setState({ monthlyIngExpend: value });
  };
  handleEmployeeChange = value => {
    this.setState({ employeesFullTime: value });
  };

  render() {

    const { monthlyIngExpend, employeesFullTime, text } = this.state;

    return (
      <div className="container">
        <section className="row">
          <div>
              <div className="content">
                  <div className="save-more">{text.calculator!==undefined?text.calculator.title:'hi'}</div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="with-bellotero">
                  {text.calculator!==undefined?text.calculator.description:'hi'}
                      
                  </div>
              </div>
          </div>

        </section>
        <aside className="row configurator">
          <div className="container">
            <h4>Monthly ingredient spending</h4>
            <input className="input numbers" type="text" value={monthlyIngExpend}></input>
            </div>
            <InputRange
              step={10}
              maxValue={100}
              minValue={10}
              value={monthlyIngExpend}
              onChange={this.handleMonthlyChange}
            />
          <div className="container">
            <h4>
              Full-time employees that process invoices 
            </h4>
            <input className="input2 numbers" value={employeesFullTime}></input>
          </div>
          <InputRange
            step={1}
            maxValue={10}
            minValue={1}
            value={employeesFullTime}
            onChange={this.handleEmployeeChange}
          />
          <Display employees={employeesFullTime} monthly={monthlyIngExpend} />
        </aside>
      </div>
    );
  }
}

export default Calculator;