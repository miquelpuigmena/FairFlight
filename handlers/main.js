const Web3 = require('web3');
const contract = require('truffle-contract');
var mongo = require('../mongodb/flightlist.js')

class BlockchainEvents {

    constructor() {
        this.provider = new Web3.providers.HttpProvider('http://localhost:8545')
        this.web3 = new Web3(this.provider);
        this.web3.eth.getAccounts()
            .then((accountlist) => {
                this.coinbase = accountlist[0]
                // this.web3.personal.unlockAccount(this.coinbase, "1234567", 0)
                console.log("Coinbase is ", this.coinbase);
                const defaults = { from: this.coinbase };
                this.ticket = contract(require('../truffle/build/contracts/FlightTicket.json'));
                this.ticket.setProvider(this.provider);
                this.ticket.defaults(defaults);
            });
    }

    createTicket(flightinfo) {

        const statusCode = new Promise((resolve, reject) => {
            mongo.addFlight(flightinfo)
                .then((response) => {
                    resolve(response)
                })
        })

    }
}

const blockchainEvents = new BlockchainEvents();

module.exports = blockchainEvents;