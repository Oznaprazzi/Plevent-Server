var chatbot = require('../services/chatbot');

exports.index = (req, res, next) => {
    res.json({message: 'This URL is not used for get requests.'})
}

exports.get_reply = (req, res, next) => {
    var message = req.body.message;
    var user = req.body.user || 'User';
    chatbot.respond(user, message).then(reply => {
        res.send(reply);
    })
}