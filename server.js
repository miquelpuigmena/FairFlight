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

bcRouter.post('/createTicket', function(req, res) {
    blockchainEvents.createTicket().then((response) => {
        res.send(response)
    }) 
})

router.use('/blockchain', bcRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)

app.listen(8080, () => console.log('Example app listening on port 8080!'))



