const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping'){
   message.channel.send('Pong!');
    }
});

 client.on('message', message => {
    if (message.content === '!geefgeld'){
      message.channel.send('http://www.paypal.me/Tjony')
    }
});

 client.on('message', message => {
    if (message.content === '!help'){
      message.channel.send('Alle commands: !help, kom je hier uit. !ping, kunnen allen mods gebruiken. !geefgeld, is eigenlijk gewoon een troll command. ')
    }
});

 client.on('message', message => {
    if (message.content === '!youtube'){
      message.channel.send('Volg Tony ook even op YouTube!: https://www.youtube.com/user/Dutchspookygames')
    }
});

 client.on('message', message => {
    if (message.content === '!twitch'){
      message.channel.send('Volg Tony ook even op Twitch! http://www.twitch.tv/tonydoet')
    }
});
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
