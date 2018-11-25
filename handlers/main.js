const Web3 = require('web3');
const contract = require('truffle-contract');
const contractData = require('../truffle/build/contracts/FlightTicket.json')
var mongoflight = require('../mongodb/flightlist.js')
var mongobuy = require('../mongodb/buylist.js')


class BlockchainEvents {

    constructor() {
        // this.provider = new Web3.providers.WebsocketProvider('ws://13.81.255.201:8545')
        this.provider = new Web3.providers.HttpProvider('http://localhost:8545')
        this.web3 = new Web3(this.provider);
        this.web3.eth.getAccounts()
            .then((accountlist) => {
                this.coinbase = accountlist[0]
                console.log("Coinbase is ", this.coinbase);
                const defaults = { from: this.coinbase };
                this.ticket = contract(require('../truffle/build/contracts/FlightTicket.json'));
                this.ticket.setProvider(this.provider);
                this.ticket.defaults(defaults);
            });
    }

    createTicket(flightinfo) {

        const statusCode = new Promise((resolve, reject) => {
            var Ticket = new this.web3.eth.Contract(contractData.abi);
            var promise = Ticket.deploy({
                data: contractData.bytecode,
                arguments: [flightinfo['_id'], flightinfo['departure'], flightinfo['arrival'], flightinfo['from'], flightinfo['to'], flightinfo['date'], flightinfo['price']]
            }).send({ from: this.coinbase, gas: 10000000 })
                .then((receipt) => {
                    console.log('New ticket address is', receipt['_address'])
                    flightinfo['blockchainId'] = receipt['_address']
                    mongoflight.addFlight(flightinfo)
                        .then((error, response) => {
                            resolve('Ticket saved to database')
                        })
                })
        })
        return statusCode
    }

    validateFlight(flightNumber, delay) {

        const statusCode = new Promise((resolve, reject) => {
            mongoflight.findFlightbyId(flightNumber)
                .then((flightinfo) => {
                    var ticket = new this.web3.eth.Contract(contractData.abi, flightinfo['blockchainId'], {from: this.coinbase})
                    ticket.methods.validateFlight(delay).send()
                    .then((response) => {
                        var percentPromise = ticket.methods.getPercentRefund().call();
                        var totalPromise = ticket.methods.getTotalRefund().call();
                        Promise.all([percentPromise, totalPromise]).then((values) => {
                            var percentRefund = values[0];
                            var totalRefund = values[1];
                            mongoflight.updateFlightInfo(flightNumber, delay, percentRefund, totalRefund)
                            .then((response) => {
                                console.log('Database updated')
                                resolve('OK')
                            })
                        })
                    })
                })
        })

        return statusCode;
    }

    addBuyFlight(flightinfo) {
        const statusCode = new Promise((resolve, reject) => {
            mongobuy.addFlight(flightinfo)
                .then((response) => {
                    resolve(response);
                })
        })
        return statusCode;
    }

    getBuyList() {
        const statusCode = new Promise((resolve, reject) => {
            mongobuy.getBuyList()
                .then((response) => {
                    console.log(response)
                    resolve(response)
                })
        })

        return statusCode;
    }

    getFlightList() {
        const statusCode = new Promise((resolve, reject) => {
            mongoflight.getFlightList()
                .then((response) => {
                    console.log(response)
                    resolve(response)
                })
        })

        return statusCode;
    }
}

const blockchainEvents = new BlockchainEvents();

module.exports = blockchainEvents;