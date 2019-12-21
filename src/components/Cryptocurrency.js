import React, { Component } from 'react';
import './Cryptocurrency.css'

class Cryptocurrency extends Component {
    render() {
        var {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        return (
            <li className={"cryptocurrency " + id} >
                <img src={"icon/"+ symbol +"@2x.png"} alt={percent_change_1h}></img>
                <p className="cryptocurrency-name"><b> {name} ({symbol}) </b></p>
                <h1>${(+price_usd).toFixed(3)}</h1>
                <p style={{color: Math.sign(percent_change_1h) === -1 ? "red" : "green"}} >{percent_change_1h}% 1hr</p>
                <p style={{color: Math.sign(percent_change_24h) === -1 ? "red" : "green"}}>{percent_change_24h}% 24hr</p>
                <p style={{color: Math.sign(percent_change_7d) === -1 ? "red" : "green"}}>{percent_change_7d}% 7days</p>

            </li>
        )
    }
}

export default Cryptocurrency;