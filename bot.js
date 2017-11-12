const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping'){
     bot.sendMessage(message,'Pong!');
    }
});

 client.on('message', message => {
    if (message.content === '!geefgeld'){
      message.reply('http://www.paypal.me/Tjony')
    }
});
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
