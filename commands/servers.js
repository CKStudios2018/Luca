module.exports = {
    name: 'servers',
    description: 'telltale server count',
    execute(message, args, client){
        message.channel.send(client.guilds.cache.size)
    }
}