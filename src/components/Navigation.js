import React, { Component } from 'react';
import './Navigation.css';
import axios from 'axios';
import logo from './../bellotero.png';

class Navigation extends Component {

    constructor(props){
      super(props);
      this.state = ({
        app: {}
      })
    }

    componentDidMount(){
      axios.get('http://localhost:3000/app.json')
        .then(res => {
            this.setState({ app: res.data})
        })
    }

    render() {
        const { app } = this.state;
        return (
            <div>
                <header className="App-header">
                    <div className="topnav">
                        <img src={logo} alt="text" className="App-logo"/>
                        <div className="topnav-right menu">
                            {app.menu!==undefined?app.menu.items.map( (item) => (
                                <a href={item.text}>{item.text}</a>
                            )):'hi'}
                        </div> 
                    </div>
                </header>
            </div>
        );
    }
}

export default Navigation;