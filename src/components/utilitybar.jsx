import React, { Component } from 'react';

class UtilityBar extends Component {

    state = {
        defaultValue: "",
        value: this.props.newTemp
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    addTemp = () => {
        //alert(this.state.value);
        this.props.funcAddTemp(this.state.value);
        document.getElementById("waterAddValue").value = "";
        this.setState({value: ""});
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="waterAddValue" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTemp} className="btn btn-primary" type="button" id="button-add-water-temp">Add New Water Temp Recording</button>
                </div>
            </div>
        );
    }

}

export default UtilityBar;