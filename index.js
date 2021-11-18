const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', async () => {
    const sta1 = "Moi Gaim is spewt wong"
    const sta2 = "I Miss Chawi"
    const sta3 = "Chawi's Among Us"
    const sta4 = "ded chat"
    const sta5 = `on ${client.guilds.cache.size} servers`
    const sta6 = "oh no"
    var stats = [sta1, sta2, sta3, sta4, sta5, sta6]
    var randomStatus = stats[Math.floor(Math.random()*stats.length)];
        await client.user.setActivity(randomStatus, { type: "STREAMING", url: "https://www.twitch.tv/CKStudios2018" });
        console.log('Bot is ready!');
    });



    client.on('message', message =>{
        if (!message.guild) return;
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        let channel = message.channel;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        if(command === '8ball'){
            client.commands.get('theball').execute(message, args, Discord);
        }
    });

client.login('lmao i stupid');