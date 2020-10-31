import React, {Component} from 'react';
import axios from 'axios';
//import Cryptocurrency component

import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

///
class Tickers extends Component {

    fetchCryptocurrencyData() {
        axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
            headers: {
                "X-CMC_PRO_API_KEY": '0fc2d406-49e9-419f-865f-bd4e3f34a5a2 ',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials':true,
            }, responseType: 'json'
        })
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin", "xrp", "tether", "stellar", "binance-coin", "tron", "iota", "monero", "bitcoin-cash",];
                console.log('API call response:', response.data.data);
                var result = response.data.data.filter(currency => wanted.includes(currency.slug));
                console.log('API call RESULT!!!:', result);
                this.setState({data: result});

            }).catch((err) => {
            console.log('API call error:', err);
        });
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData, 300000);
    }

    state = {
        data: [
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "bitcoin",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "ethereum",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "litecoin",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "xrp",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "tether",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "stellar",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "binance-coin",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "tron",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "iota",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "monero",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            },
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                slug: "bitcoin-cash",
                last_updated: "2020-10-31T16:13:02.000Z",
                quote: {
                    USD: {
                        price: 13822.793752577987,
                        volume_24h: 29754222006.79913,
                        percent_change_1h: -0.12057471,
                        percent_change_24h: 2.89542736,
                        percent_change_7d: 5.19105794,
                        market_cap: 256144565151.9654,
                        last_updated: "2020-10-31T16:13:02.000Z"
                    }
                }
            }
        ]
    }

    render() {

        var tickers = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.slug}/>
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