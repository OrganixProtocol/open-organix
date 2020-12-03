/**
 * Created by heipacker on 20-09-30.
 */
const {Api, JsonRpc, RpcError} = require('eosjs');
const {JsSignatureProvider} = require('eosjs/dist/eosjs-jssig');      // development only
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const {TextEncoder, TextDecoder} = require('util');                   // node only; native TextEncoder/Decoder
const Config = require("./minter_config.json");

const account = Config.account;
const defaultPrivateKey = Config.defaultPrivateKey;
const endpoint = Config.endpoint;

const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc(endpoint, {fetch});
const api = new Api({
    rpc,
    signatureProvider,
    textDecoder: new TextDecoder(),
    textEncoder: new TextEncoder(),
});

let handler = function () {
    let transaction = {
        "actions": [
            {
                "account": account,
                "name": "closecfeepod",
                "authorization": [
                    {
                        "actor": account,
                        "permission": "active"
                    }
                ],
                "data": {}
            }
        ]
    };
    console.log(JSON.stringify(transaction));
    api.transact(transaction, {
        blocksBehind: 3,
        expireSeconds: 300, // 5分钟
    }).then(res => {
        console.info((new Date).toLocaleString() + " " + '成功:' + JSON.stringify(res));
    }).catch(err => {
        console.error((new Date).toLocaleString() + " " + '失败:' + err);
    })
};
handler();
setInterval(handler, 10 * 60 * 1000);