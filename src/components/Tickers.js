import React, { Component } from 'react';
import axios from 'axios';
//import Cryptocurrency component

import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

///
class Tickers extends Component {

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=40")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin","xrp","tether","stellar","binance-coin","tron","iota","monero","bitcoin-cash",];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result });
                console.log('API call response:', response);
            }).catch((err) => {
                console.log('API call error:', err);
            });
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData, 1 * 1000);
    }

    state = {
        data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "xrp",
                name: "XRP",
                symbol: "XRP",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "tether",
                name: "Tether",
                symbol: "USDT",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            
            {
                id: "stellar",
                name: "Stellar",
                symbol: "XLM",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },

            {
                id: "binance-coin",
                name: "Binance Coin",
                symbol: "BNB",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "iota",
                name: "IOTA",
                symbol: "MIOTA",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "tron",
                name: "TRON",
                symbol: "TRX",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "bitcoin-cash",
                name: "Bitcoin Cash",
                symbol: "BCH",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "monero",
                name: "Monero",
                symbol: "XMR",
                price_usd: "0",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            }
        ]
    }

    render() {
        var tickers = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id}/>
        );
        console.log(tickers);
        return (
            <div className="tickers-containers">
                <ul className="tickers">{tickers}</ul>                
            </div>
        );
    }
}

export default Tickers;