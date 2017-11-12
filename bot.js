const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping'){
      message.reply('Pong!')
    }
});

 client.on('message', message => {
    if (message.content === '!geefgeld'){
      message.reply('http://www.paypal.me/Tjony')
    }
});
 
   [Command("Clear")]
        public async Task clear([Remainder] int Delete = 0)
        {
            IGuildUser Bot = await Context.Guild.GetUserAsync(Context.Client.CurrentUser.Id);
            if (!Bot.GetPermissions(Context.Channel as ITextChannel).ManageMessages)
            {
                await Context.Channel.SendMessageAsync("`Bot does not have enough permissions to manage messages`");
                return;
            }
            await Context.Message.DeleteAsync();
            var GuildUser = await Context.Guild.GetUserAsync(Context.User.Id);
            if (!GuildUser.GetPermissions(Context.Channel as ITextChannel).ManageMessages)
            {
                await Context.Channel.SendMessageAsync("`You do not have enough permissions to manage messages`");
                return;
            }
            if (Delete == null)
            {
                await Context.Channel.SendMessageAsync("`You need to specify the amount | !clear (amount) | Replace (amount) with anything`");
            }
            int Amount = 0;
            foreach (var Item in await Context.Channel.GetMessagesAsync(Delete).Flatten())
            {

                    Amount++;
                    await Item.DeleteAsync();
                
            }
            await Context.Channel.SendMessageAsync($"`{Context.User.Username} deleted {Amount} messages`");
        }
});
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
