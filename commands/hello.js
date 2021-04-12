module.exports = {
    name: 'hello',
    description: 'replies hi',
    execute(message, args){
        message.reply('Hello!');
    }
}