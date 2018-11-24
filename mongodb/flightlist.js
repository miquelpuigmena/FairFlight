var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flitghSchema = new Schema({
  id:  String,
  departure: String,
  arrival:   String,
  from:   String,
  to:   String,
  date:   String,
  price:   Number,
  airline: String
});