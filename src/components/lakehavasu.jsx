import React, { Component } from "react";

import WaterTemp from './watertemp'
import UtilityBar from './utilitybar'

class LakeHavasu extends Component {
    state = {
        newTemp: "",
        lakehavasu: [
            {
                id: 0,
                value: "72.1",
                date: "5/18/21"
            },
            {
                id: 1,
                value: "72.1",
                date: "5/17/21"
            },
            {
                id: 2,
                value: "72.4",
                date: "5/16/21"
            },
            {
                id: 3,
                value: "72.4",
                date: "5/15/21"
            },
            {
                id: 4,
                value: "72.2",
                date: "5/14/21"
            }
        ]
    }

    getDate() {
        let date = new Date()
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    }

    deleteItem = watertemp => {
        const temps = this.state.lakehavasu.filter((temp) => {
            return temp.id !== watertemp
        });
        this.setState({newTemp: "", lakehavasu: temps});
    }

    addNewTemp = value => {
        if (value) {
            const temps = [...this.state.lakehavasu];

            temps.push({
                id: temps.length,
                value: value,
                date: this.getDate()
            });
            console.log(temps);
            this.setState({newTemp: "", lakehavasu: temps});
        } else {
            alert("Missing Add Temp");
        }
    }

    render() {
        return (
            <table className="table">
                <thead className="text-center">
                <td>Item #</td>
                <td>Date Taken</td>
                <td>Water Temperature (F)</td>
                <td>Actions</td>
                </thead>
                <tbody>
                {this.state.lakehavasu.map((watertemp, index) => (
                    <tr key={watertemp.id}>
                        <WaterTemp index={index+1} watertemp={watertemp} funcDelete={this.deleteItem}/>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <td colSpan="4" className="text-center">
                        <UtilityBar funcAddTemp={this.addNewTemp} newTemp={this.state.newTemp} />
                    </td>
                </tfoot>
            </table>
        )
    }
}

export default LakeHavasu;