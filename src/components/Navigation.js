import React, { Component } from 'react';
import './Navigation.css';
import axios from 'axios';
import logo from './../bellotero.png';
import { Route, BrowserRouter } from 'react-router-dom';
import Testimonial from './Testimonial.js'

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
                            <BrowserRouter>
                            {app.menu!==undefined?app.menu.items.map( (item, index) => (
                                <Route path={item.route} component={Testimonial}> 
                                    <a href={item.text}>{item.text}</a>
                                </Route>
                            )):'hi'}
                            </BrowserRouter>
                        </div>
                        
                    </div>
                </header>
            </div>
        );
    }
}

export default Navigation;