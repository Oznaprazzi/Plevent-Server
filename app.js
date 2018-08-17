// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

// Route Definition
var index = require('./routes/index');
var users = require('./routes/users');
var events = require('./routes/events');
var grocery = require('./routes/grocery');
var accommo = require('./routes/accommo');
var gears = require('./routes/gears');
var aval = require('./routes/availability')
var expenses = require('./routes/expenses');
var chatbot = require('./routes/chatbot');

var friendslist = require('./routes/friendslist');
var friendsrequest = require('./routes/friendrequest');

var transports = require('./routes/trans');
var waypoints = require('./routes/waypoints');
var chatrooms = require('./routes/chatroom');


var app = express();

// Database Configuration & Setup
var mongoDB = 'mongodb://admin:adminpw1@ds135619.mlab.com:35619/plevent-db';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Middleware Setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    next();
});

// Set up Routes

app.use('/', index);
app.use('/users', users);
app.use('/events', events);
app.use('/grocery', grocery);
app.use('/accommo', accommo);
app.use('/gears', gears);
app.use('/availability', aval);
app.use('/expenses', expenses);
app.use('/chatbot', chatbot);

app.use('/friendslist', friendslist);
app.use('/friendsrequest', friendsrequest);

app.use('/transports', transports);
app.use('/waypoints', waypoints);
app.use('/chatrooms', chatrooms);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // send error signal
    res.status(err.status || 500);
    res.send({error: err});
});

// Start Listening
app.listen(8080);
console.log('App listening on port 8080');