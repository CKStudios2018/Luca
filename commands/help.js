module.exports = {
    name: 'hello',
    description: 'replies hi',
    execute(message, args){
        message.author.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`');
    }
}