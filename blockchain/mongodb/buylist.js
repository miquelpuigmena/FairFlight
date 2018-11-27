var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://fairflight-mongo:oJQdgXjpwcf5nL7MJ38tY6B1rs4AZH2T1wr4TErRdGaPGMyZsrkaBRQtgg48fkiEAdirwDNUqDoVJg3lVudp6A%3D%3D@fairflight-mongo.documents.azure.com:10255/?ssl=true")
    .then(() => {
        console.log("Successfully conected to mongodb")
    })


var buySchema = new Schema({
    _id: String,
    departure: String,
    arrival: String,
    from: String,
    to: String,
    date: String,
    price: Number,
    airline: String
});

var buyModel = mongoose.model('buylist', buySchema)

function addFlight(flightinfo) {
    var flight = new buyModel(flightinfo);
    return flight.save()
}

function getBuyList() {
    return buyModel.find({})
}

module.exports = { buyModel, getBuyList, addFlight }