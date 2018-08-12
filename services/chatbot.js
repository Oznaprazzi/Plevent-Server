var rivescript = require('rivescript');
var bot = new rivescript();

// Load directory with conversation scripts
bot.loadDirectory('brain').then(loadingDone).catch(handleError);

function loadingDone(){
    console.log('Bot has finished loading!');
    bot.sortReplies();
}

function handleError(err, filename, lineno){
    console.log('Error when loading files: ' + err);
}

/**
 * Responds to the message sent by the user.
 * 
 * @param {*} user 
 * @param {*} message 
 */
exports.respond = async (user, message) => {
    var reply = await bot.reply(user, message);
    return reply;
}