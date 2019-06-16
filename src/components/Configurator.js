import React, { Component } from 'react';
import './Configurator.css';

class Configurator extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="margins col-md-6">
                        <div className="save-more"> Save More With bellotero.io</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="with-bellotero">
                            With Bellotero.io you save 
                            time and money make real-time 
                            decisions that boost your business 
                            and your bottom line. Get less 
                            wrongfully blocked payments, 
                            save time on bookkeeping and no 
                            need to worry about safety.
                        </div>
                    </div>
                    <div className="calculator col-md-6">
                        <div>  
                            <p> Montly ingredient expending </p> 
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Configurator;