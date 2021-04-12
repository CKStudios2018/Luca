module.exports = {
    name: 'hello',
    description: 'replies hi',
    execute(message, args){
        message.channel.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`');
    }
}