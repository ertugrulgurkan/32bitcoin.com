import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    render() {
        var {
            PRICE,
            FROMSYMBOL,
            CHANGEPCTHOUR,
            CHANGEPCTDAY,
        } = this.props.data;

        var name = { 
            BTC : "Bitcoin",
            ETH : "Etherium",
            USDT: "Tether",
            XRP: "Ripple",
            BCH: "Bitcoin Cash",
            BNB: "Binance Coin",
            LTC: "Litecoin",
            XMR: "Monero",
            TRX: "TRON",
            XLM: "Stellar",
            MIOTA: "IOTA"
        }
        return (
            <li className={"cryptocurrency " + FROMSYMBOL.toLowerCase()} >
                {<img src={"./icons/"+ FROMSYMBOL.toLowerCase() +"@2x.png"} alt={FROMSYMBOL}></img>}
                <p className="cryptocurrency-name"><b> {name[FROMSYMBOL]}  ({FROMSYMBOL}) </b></p>
                <h1>${(+PRICE).toFixed(3)}</h1>
                <p style={{color: Math.sign(CHANGEPCTHOUR) === -1 ? "red" : "green"}} >${(+CHANGEPCTHOUR).toFixed(2)}% 1hr</p>
                <p style={{color: Math.sign(CHANGEPCTDAY) === -1 ? "red" : "green"}}>${(+CHANGEPCTDAY).toFixed(2)}% 24hr</p>

            </li>
        )
    }
}

export default Cryptocurrency;