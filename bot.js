const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping'){
      message.reply('pong')
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

; The starting volume of the bot.  You can use any value from 0.01 to 1.0 but 0.15 is probably fine
DefaultVolume = 0.15

; Only allow whitelisted users to use commands
; Deprecated in favor of permissions
WhiteListCheck = no

; Skips required to skip a song.  Whichever is lower will be used.
; Skip ratio refers to the percent of non-deafened, non-owner users
; in the voice channel needed to skip a song.
SkipsRequired = 4
SkipRatio = 0.5

; If no, delete videos after they've played, if the video
; isn't still in the queue, to avoid redownloading it.
SaveVideos = yes

; Mentions the user who queued a song when the song plays.
NowPlayingMentions = no

; On start up, if the owner is in a voice channel, join that channel.
AutoSummon = yes

; Play random songs when nothing is queued.
UseAutoPlaylist = yes

; When no one else is in the voice channel, pause the music, and resume when someone joins again.
AutoPause = yes

; Automatically delete messages the bot sends after some time.
DeleteMessages = yes

; Delete the invoking message when DeleteMessages is enabled.  Does nothing when DeleteMessages is disabled.
; Note the bot must have Manage Messages permission in the channel to delete other messages.
DeleteInvoking = no

; Prints extra output in the console and some errors to chat.
; This option is a work in progress, don't expect much.  You might as well just leave it on for now.
DebugMode = no
