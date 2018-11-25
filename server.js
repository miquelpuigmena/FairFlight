var bodyParser = require('body-parser');
const app = require('express')()
const blockchainEvents = require('./handlers/main');



let router = require('express').Router();
let path = require('path')

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

var bcRouter = require('express').Router();

bcRouter.post('/createTicket', function (req, res) {
    var flightinfo = {
        "_id": req.body._id,
        "userId": req.body.userId,
        "departure": req.body.departure,
        "arrival": req.body.arrival,
        "from": req.body.from,
        "to": req.body.to,
        "date": req.body.date,
        "price": req.body.price,
        "airline": req.body.airline
    }
    blockchainEvents.createTicket(flightinfo).then((response) => {
        res.send(response)
    })
})

bcRouter.post('/validateFlight', function (req, res) {
    blockchainEvents.validateFlight(req.body._id, req.body.delay).then((response) => {
        res.send(response)
    })
})

bcRouter.post('/addBuyFlight', function (req, res) {
    var flightinfo = {
        "_id": req.body._id,
        "departure": req.body.departure,
        "arrival": req.body.arrival,
        "from": req.body.from,
        "to": req.body.to,
        "date": req.body.date,
        "price": req.body.price,
        "airline": req.body.airline
    }
    blockchainEvents.addBuyFlight(flightinfo).then((response) => {
        res.send(response)
    })
})

bcRouter.get('/getBuyList', function (req, res) {

    blockchainEvents.getBuyList().then((response) => {
        res.send(response)
    })
})

bcRouter.get('/getFlightList', function (req, res) {

    blockchainEvents.getFlightList().then((response) => {
        res.send(response)
    })
})

router.use('/blockchain', bcRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)

app.listen(8080, () => console.log('Example app listening on port 8080!'))



