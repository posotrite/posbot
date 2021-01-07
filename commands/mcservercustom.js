const fetch = require('node-fetch');
const util = require('minecraft-server-util');
const Discord = require('discord.js');
module.exports = {
    name: 'mcs',
    description: "mc server checker",
    async run (client, message, args){
        util.status(message.content.slice(5), { port: 25565 }) // port is optional, defaults to 25565
    .then((response) => {
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Server Status")
            .setThumbnail("https://i.imgur.com/4wqURRn.png")
            .addField("Description", response.description)
            .addField("Server IP", response.host)
            .addField("Server Version", response.version)
            .addField("Online Players", response.onlinePlayers)
            .addField("Max players", response.maxPlayers)
            message.channel.send(Embed)
    })
    .catch((error) => {
        message.channel.send("Please specify a valid server ip!")
    });
    }
}