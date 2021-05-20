import React, { Component } from 'react';
import './App.css';
import LakeHavasu from "./components/lakehavasu";

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Most Recent Water Temperatures @ Lake Havasu, AZ</h1>
                <LakeHavasu />
            </div>
        );
    }
}

export default App;