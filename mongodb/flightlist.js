var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://fairflight-mongo:oJQdgXjpwcf5nL7MJ38tY6B1rs4AZH2T1wr4TErRdGaPGMyZsrkaBRQtgg48fkiEAdirwDNUqDoVJg3lVudp6A%3D%3D@fairflight-mongo.documents.azure.com:10255/?ssl=true")
    .then(() => {
        console.log("Successfully conected to mongodb")
    })


var flitghSchema = new Schema({
    _id: String,
    blockchainId: String,
    userId: String,
    departure: String,
    arrival: String,
    from: String,
    to: String,
    date: String,
    price: Number,
    airline: String,
    delay: Number,
    percentRefund: Number,
    totalRefund: Number,
    visaData: String
});

var flightModel = mongoose.model('flightlist', flitghSchema)

function addFlight(flightinfo) {
    var flight = new flightModel(flightinfo);
    return flight.save()
}

function getFlightList() {
    return flightModel.find({})
}

function findFlightbyId(flightNumber) {
    return flightModel.findOne({ '_id': flightNumber })
}

function updateFlightInfo(flightNumber, _delay, _percentRefund, _totalRefund) {
    return flightModel.update(

        { _id: flightNumber },
        { $set: { delay: _delay, percentRefund: _percentRefund, totalRefund: _totalRefund } },

        function (err, raw) {
            if (err) return handleError(err);
            console.log('The raw response from Mongo was ', raw);
        }
    );
}

module.exports = { flightModel, addFlight, getFlightList, findFlightbyId, updateFlightInfo }