import React, { Component } from 'react';
import axios from 'axios';
//import Cryptocurrency component

import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

///
class Tickers extends Component {

    fetchCryptocurrencyData() {

        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,XRP,BCH,BNB,LTC,XMR,TRX,XLM,MIOTA&tsyms=USD", {
            headers: {
                "api_key": '725b48743245acfa1cc35a4d020ccc89a3b84fa35cd89e0271247125f3a6bff7',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Access-Control-Allow-Credentials": true,
            }, responseType: 'json'
        })
            .then(response => {
                var result = response.data.RAW;
                console.log('API call response:', result);
                //var result = response.data.data.filter(currency => wanted.includes(currency.slug));
                this.setState(result);


            }).catch((err) => {
                console.log('API call error:', err);
            });
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData, 10000);
    }

    state = {
        "BTC": {
            "USD": {
                FROMSYMBOL: "BTC",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "ETH": {
            "USD": {
                FROMSYMBOL: "ETH",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "USDT": {
            "USD": {
                FROMSYMBOL: "USDT",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "XRP": {
            "USD": {
                FROMSYMBOL: "XRP",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "BCH": {
            "USD": {
                FROMSYMBOL: "BCH",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "BNB": {
            "USD": {
                FROMSYMBOL: "BNB",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "LTC": {
            "USD": {
                FROMSYMBOL: "LTC",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "XMR": {
            "USD": {
                FROMSYMBOL: "XMR",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "TRX": {
            "USD": {
                FROMSYMBOL: "TRX",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "XLM": {
            "USD": {
                FROMSYMBOL: "XLM",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        },
        "MIOTA": {
            "USD": {
                FROMSYMBOL: "MIOTA",
                TOSYMBOL: "USD",
                PRICE: 13742.44,
                VOLUMEDAY: 7074.431563470762,
                VOLUMEDAYTO: 97105965.15171754,
                VOLUME24HOUR: 43779.05322074899,
                VOLUME24HOURTO: 604940152.152655,
                OPENDAY: 13803.41,
                HIGHDAY: 13897.02,
                LOWDAY: 13630.22,
                OPEN24HOUR: 13584.83,
                HIGH24HOUR: 14083.86,
                LOW24HOUR: 13568.08,
                VOLUMEHOUR: 316.50185489000114,
                VOLUMEHOURTO: 4349627.364360784,
                OPENHOUR: 13728.62,
                HIGHHOUR: 13764.34,
                LOWHOUR: 13725.75,
                TOPTIERVOLUME24HOUR: 42834.04845105999,
                TOPTIERVOLUME24HOURTO: 592021511.8656727,
                CHANGE24HOUR: 157.61000000000058,
                CHANGEPCT24HOUR: 1.1601911838425698,
                CHANGEDAY: -60.969999999999345,
                CHANGEPCTDAY: -0.4417024488876252,
                CHANGEHOUR: 13.819999999999709,
                CHANGEPCTHOUR: 0.10066561679178031,
                MKTCAP: 254662090125.92,
                TOTALVOLUME24H: 320540.56366098695,
            }
        }
    }

    render() {

        var arrayTickers = Object.values(this.state);
        console.log(arrayTickers);

        var tickers = arrayTickers.map((currency) =>
        <Cryptocurrency data={currency.USD} key={currency.USD.FROMSYMBOL}/>
    );
        return (
            <div className="tickers-containers">
                <ul className="tickers">{tickers}</ul>
            </div>
        );
    }
}

export default Tickers;