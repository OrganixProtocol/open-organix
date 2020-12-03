/**
 * Created by heipacker on 17-03-22.
 */
const Async = require('async');
const Ccxt = require("ccxt");
const BigNumber = require('bignumber.js');

const Binance = Ccxt.binance;

const huobipro = new Binance({
    verbose: false,
    enableRateLimit: true
});

const oracleRequest = {

    getPriceContext: function (params, callback) {
        const DECIMAL = 100000000;

        const context = {
            "paramsList": [],
            "params": {}
        };
        Async.parallelLimit([
            function (callback) {
                huobipro.fetchOrderBook("ETH/USDT", 5).then(function (bidsAsks) {
                    console.log(JSON.stringify(bidsAsks));
                    let price = new BigNumber(bidsAsks.asks[0][0] * DECIMAL);
                    context["paramsList"].push({
                        "key": "8,OETH",
                        "value": price,
                    });
                    context["params"]["8,OETH"] = price;

                    callback(null, null);
                }).catch(function (err) {
                    callback(err, null);
                });
            }
        ], 2, function (err, results) {
            if (err != null) {
                console.log(err);
                return callback(new Error(JSON.parse(err)));
            }
            callback(null, context);
        });
    }
};

console.log("------begin----");

oracleRequest.getPriceContext({}, function (err, result) {
    console.log(JSON.stringify(result));
});