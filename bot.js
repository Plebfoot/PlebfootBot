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
      message.channel.send(''Dit zijn de commands!
                             !help, Kom je hier uit. 
                             !ping, Kan je kijken of de bot werkt.
                             !geefgeld, Is gewoon een trol command.'')
    }
});
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
