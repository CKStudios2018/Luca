const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs');
const prefix = '!;'

Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.once('ready', async () => {
    await client.user.setPresence({status: 'idle'});
    console.log(`Logged in!`);
});

Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args);
    } else if(command == 'hi'){
        Client.commands.get('hello').execute(message, args);
    } else if(command == 'help'){
        Client.commands.get('help').execute(message, args);
    } else if(command == '8Ball'){
        Client.commands.get('8Ball').execute(message, args);
    } else if(command == 'about'){
        Client.commands.get('about').execute(message, args);
    } else if(command == 'eval'){
        Client.commands.get('eval').execute(message, args);
    } else if(command == 'oliy'){
        message.author.send('Oliy is fat');
    }
});
  
  Client.on('message', function (message) {
      if (message.content.includes('fuck')) {
          return message.reply('nO swearing!!111!1')
      }
  })

Client.login('not process.env.token lol'); //what is wrong with function us(and our params)?