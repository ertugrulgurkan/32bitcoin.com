import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    render() {
        var {
            id,
            name,
            symbol
        } = this.props.data;
        return (
            <li className={"cryptocurrency " + id} >
                {<img src={"./icons/"+ symbol.toLowerCase() +"@2x.png"} alt={symbol}></img>}
                <p className="cryptocurrency-name"><b> {name} ({symbol}) </b></p>
                <h1>${(+this.props.data.quote.USD.price).toFixed(3)}</h1>
                <p style={{color: Math.sign(this.props.data.quote.USD.percent_change_1h) === -1 ? "red" : "green"}} >${(+this.props.data.quote.USD.percent_change_1h).toFixed(2)}% 1hr</p>
                <p style={{color: Math.sign(this.props.data.quote.USD.percent_change_24h) === -1 ? "red" : "green"}}>${(+this.props.data.quote.USD.percent_change_24h).toFixed(2)}% 24hr</p>
                <p style={{color: Math.sign(this.props.data.quote.USD.percent_change_7d) === -1 ? "red" : "green"}}>${(+this.props.data.quote.USD.percent_change_7d).toFixed(2)}% 7days</p>

            </li>
        )
    }
}

export default Cryptocurrency;