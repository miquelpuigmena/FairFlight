const Web3 = require('web3');
const contract = require('truffle-contract');

class BlockchainUtils{

    static start(coinbase) {
        this.web3 = new Web3(`http://localhost:8545`);
        this.provider = new Web3.providers.HttpProvider(`http://localhost:8545`)

        this.Account = contract(require('../../build/contracts/Account.json'));
        this.Database = contract(require('../../build/contracts/Database.json'));
        this.Transaction = contract(require('../../build/contracts/Transaction.json'));
        this.User = contract(require('../../build/contracts/User.json'));

        this.Account.setProvider(this.provider);
        this.Database.setProvider(this.provider);
        this.Transaction.setProvider(this.provider);
        this.User.setProvider(this.provider);

        const defaults = {from: coinbase, gas: 4712388 };
        this.Account.defaults(defaults);
        this.Database.defaults(defaults);
        this.Transaction.defaults(defaults);
        this.User.defaults(defaults);

        console.log("Blockchain Utils started");
    }

    //Database Methods

    static addUser(callback) {
        this.User.new().then((user) => {
            db.addUser(user.address).then(() => {
                callback(null, user);
            }, (err) => { console.log(err); callback(err, null); });
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getUserList(callback) {
        db.getUsers().then((users) => {
            callback(null, users);
        }, (err) => { console.log(err); callback(err, null); })
    }
    
    //User Methods

    static getUser(address, callback) {
        let user = {};
        this.getCoinbase(address, (err, res) => {
            user.coinbase = res;
            this.getInvestAccount(address, (err, res) => {
                user.investAccount = res;
                this.getSavingAccounts(address, (err, res) => {
                    user.savingAccounts = res;
                    callback(null, user);
                });
            });
        });
    }

    static getCoinbase(address, callback) {
        let user = this.User.at(address);
        user.getCoinbase().then((coinbase) =>{
            callback(null, coinbase);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getInvestAccount(address, callback) {
        let user = this.User.at(address);
        user.getInvestAccount().then((invest) =>{
            callback(null, invest);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addAccount(address, callback) {
        let user = this.User.at(address);
        this.Account.new(address).then((account) => {
            user.addAccount(account.address).then((account) => {
                callback(null, account);
            }, (err) => { console.log(err); callback(err, null); });
        }, (err) => { console.log(err); callback(err, null); })
    }

    static getSavingAccounts(address, callback) {
        let user = this.User.at(address);
        user.getSavingAccounts().then((accounts) => {
            callback(null, accounts);
        }, (err) => { console.log(err); callback(err, null); });
    }
    
    
    //Account Methods
    
    static getAccount(address, callback) {
        let account = {};
        this.getBalance(address, (err, res) => {
            account.balance = res;
            this.getOwner(address, (err, res) => {
                account.owner = res;
                this.isGroupAccount(address, (err, res) => {
                    account.groupAccount = res;
                    this.getHolders(address, (err, res) => {
                        account.holders = res;
                        this.getTransactions(address, (err, res) => {
                            account.transactions = res;
                            callback(null, account);
                        });
                    });
                });
            });
        });
    }
    
    static getBalance(address, callback) {
        let account = this.Account.at(address);
        account.getBalance().then((res)=>{
            callback(null, res.c[0]);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getOwner(address, callback) {
        let account = this.Account.at(address);
        account.getOwner().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static isGroupAccount(address, callback) {
        let account = this.Account.at(address);
        account.isGroupAccount().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getHolders(address, callback) {
        let account = this.Account.at(address);
        account.getHolders().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getTransactions(address, callback) {
        let account = this.Account.at(address);
        account.getTransactions().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addIncome(address, amount, method, description, callback) {
        let account = this.Account.at(address);
        account.addIncome(amount, method, description).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addOutcome(address, amount, description, callback) {
        let account = this.Account.at(address);
        account.addOutcome(amount, description).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addTransfer(address, destination, amount, description, callback) {
        let account = this.Account.at(address);
        account.addTransfer(destination, amount, description).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addInvestIn(address, destination, amount, callback) {
        let account = this.Account.at(address);
        account.addInvestIn(destination, amount).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static addInvestOut(address, destination, amount, callback) {
        let account = this.Account.at(address);
        account.addInvestOut(destination, amount).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }
    
    addBenefit(address, amount, callback) {
        let account = this.Account.at(address);
        account.addBenefit(amount).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }
    
    addLoss(address, amount, callback) {
        let account = this.Account.at(address);
        account.addLoss(amount).then(() => {
            callback(null, null);
        }, (err) => { console.log(err); callback(err, null); });
    }
    
    //Transaction Methods

    static getTransaction(address, callback) {
        let origin;
        let destination;
        let txtype;
        let amount;
        let method;
        let description;
        this.getOrigin(address, (err, res) => {
            origin = res;
            this.getDestination(address, (err, res) => {
                destination = res;
                this.getTxType(address, (err, res) => {
                    txtype = res;
                    this.getAmount(address, (err, res) => {
                        amount = res;
                        this.getMethod(address, (err, res) => {
                            method = res;
                            this.getDescription(address, (err, res) => {
                                description = res;
                                let transaction = {};
                                switch (txtype){
                                    case 1:
                                        transaction.destination = destination;
                                        transaction.method = method;
                                        transaction.description = description;
                                        break;
                                    case 2:
                                        transaction.origin = origin;
                                        transaction.description = description;
                                        break;
                                    case 3:
                                        transaction.destination = destination;
                                        transaction.origin = origin;
                                        transaction.description = description;
                                        break;
                                    case 4:
                                    case 5:
                                        transaction.destination = destination;
                                        transaction.origin = origin;
                                        break;
                                    case 6:
                                    case 7:
                                        transaction.destination = destination;
                                        break;
                                }
                                transaction.txtype = txtype;
                                transaction.amount = amount;
    
                                callback(null, transaction);
                            });
                        });
                    });
                });
            });
        });
    }

    static getOrigin(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getOrigin().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getDestination(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getDestination().then((res)=>{
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getTxType(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getTxType().then((res)=>{
            callback(null, res.c[0]);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getAmount(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getAmount().then((res)=>{
            callback(null, res.c[0]);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getMethod(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getMethod().then((res)=>{
            callback(null, res.c[0]);
        }, (err) => { console.log(err); callback(err, null); });
    }

    static getDescription(address, callback) {
        let transaction = this.Transaction.at(address);
        transaction.getDescription().then((res) => {
            callback(null, res);
        }, (err) => { console.log(err); callback(err, null); });
    }

}

module.exports = BlockchainUtils;