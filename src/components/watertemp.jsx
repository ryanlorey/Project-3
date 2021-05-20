import React, { Component } from 'react';

class WaterTemp extends Component {
    render() {
        return (
            <React.Fragment>
                <td style={{width: 10}} className="text-center">
                    {this.props.index}
                </td>
                <td style={{width: 15}} className="text-center">
                    {this.props.watertemp.date}
                </td>
                <td style={{width: 15}} className="text-center">
                    {this.props.watertemp.value}
                </td>
                <td style={{width: 100}} className="text-center">
                    <button onClick={() => this.props.funcDelete(this.props.watertemp.id)} className="btn btn-danger btn-sm">Delete Item</button>
                </td>
            </React.Fragment>
        );
    }
}

export default WaterTemp;