const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs');
const prefix = '!';

Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.once('ready', async () => {
    await Client.user.setPresence({status: 'idle'});
    console.log(`Logged in!`);
});

Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args);
    } else if(command == 'ello'){
        message.reply('Hello!');
    } else if(command == 'help'){
        message.channel.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`');
    } else if(command == '8Ball'){
        Client.commands.get('8Ball').execute(message, args);
    } else if(command == 'about'){
        Client.commands.get('about').execute(message, args);
    } else if(command == 'eval'){
        Client.commands.get('eval').execute(message, args);
    } else if(command == 'oliy'){
        message.author.send('Oliy is fat');
    } else if(command == 'avatar'){
        Client.commands.get('avatar').execute(message, args, Discord);
    }
});
  
const noNoWords = ["sex", "fuck", "shit", "condom"];

Client.on("message", message => {
    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            message.reply('nO swearing!!111!1');
            break
        }
    }
})

Client.login(process.env.token); //what is wrong with function us(and our params)?
