/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://fairflight-mongo:oJQdgXjpwcf5nL7MJ38tY6B1rs4AZH2T1wr4TErRdGaPGMyZsrkaBRQtgg48fkiEAdirwDNUqDoVJg3lVudp6A%3D%3D@fairflight-mongo.documents.azure.com:10255/?ssl=true")
.then(() => {
    console.log("Successfully conected to mongodb")
})

const flightSchema = new Schema(
  {
  id:  String,
  departure: String,
  arrival:   String,
  from:   String,
  to:   String,
  date:   String,
  price:   Number,
  airline: String  
  }
);

//const flightModel = mongoose.model('buylist', flightSchema);

function get() {
  return mongoose.model('buylist', flightSchema).find({});
}

//module.exports = {flightModel, connect, get} 
module.exports = { get }*/