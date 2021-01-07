const Discord = require('discord.js');
DisTube = require('distube');
const client = new Discord.Client();
const prefix = '~';
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, highWaterMark: 1 << 25 });
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
client.on('ready', () => {
    console.log('lbot is online!');
    client.user.setActivity('~help', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  const { Database } = require("quickmongo");
});
const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
distube.on("playSong", (message, queue, song) => {
    const musicEmbed = new Discord.MessageEmbed()
        .setTitle('Now Playing: ' + song.name)
        .setColor('29b76b')
        .setDescription('Duration: `' + song.formattedDuration + '`\nRequested By: <@' + song.user + '>');
    message.channel.send(musicEmbed);
});
distube.on("addSong", (message, queue, song) => message.channel.send(
    `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
))
distube.on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
distube.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
distube.on("error", (message, err) => console.log(
    "An error encountered: " + err
));


client.on('message', async message =>{

  
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'play'){
        if (message.member.voice.channel) {
        distube.play(message, args.join(" "));
        }
        else {
            message.channel.send("please enter a voice channel!")
        }
    }
    else if (command == "stop") {
        if (message.member.voice.channel && message.guild.me.voice.channel) {
        distube.stop(message);
        message.channel.send("Stopped music!");
        }
        else {
            message.channel.send("you and Lbot need to be in a voice channel")
        }
    }
    if (command == "queue") {
        if (message.member.voice.channel && message.guild.me.voice.channel){
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).join("\n"));
        }
        else {
            message.channel.send('you and lbot need to be in a voice channel')
        }
    }
    if (command == "skip")
    if (message.member.voice.channel && message.guild.me.voice.channel){
    distube.skip(message);
    }
    else {
        message.channel.send("you and lbot need to be in a voice channel!")
    }
if(!client.commands.has(command)) return;


try {
    client.commands.get(command).run(client, message, args);

} catch (error){
    console.error(error);
    message.reply("sorry, that command does not exist!")
}
});


client.login('NzQ2ODA4NjI1NzExOTM5NjE0.X0Ftuw.QMtXWbCKwZ5X5wOMbKPrIG3IUos');