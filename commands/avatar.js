module.exports = {
    name: 'avatar',
    description: 'avatar embed',
    execute(message, args, Discord){
        const avatarAuthor = new Discord.MessageEmbed()
      .setColor(0x333433)
      .setAuthor(message.author.username)
      .setImage(message.author.avatarURL)
        message.channel.send(avatarAuthor);
    }
}