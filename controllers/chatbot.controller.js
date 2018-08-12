var chatbot = require('../services/chatbot');

exports.index = (req, res, next) => {
    res.json({message: 'This URL is not used for get requests.'})
}

exports.get_reply = (req, res, next) => {
    var message = req.body.message;
    var user = req.body.user || 'Chris Rabe';
    chatbot.respond(user, message).then(reply => {
        var data = {
            user: 'Plive',
            message: reply
        }
        res.json(data);
    }).catch(err => res.error(err));
}