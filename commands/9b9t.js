const fetch = require('node-fetch');
const util = require('minecraft-server-util');
const Discord = require('discord.js');
module.exports = {
    name: '9b9t',
    description: "9b9t server status",
    async run (client, message, args){
        util.status('9b9t.com', { port: 25565 }) // port is optional, defaults to 25565
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
        message.channel.send("there was an error getting the server")
    });
    }
}