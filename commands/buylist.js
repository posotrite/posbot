const Discord = require('discord.js');
module.exports = {
    name: 'buylist',
    description: "shopping list commands",
    async run (client, message, args){
        const Embed = new Discord.MessageEmbed()
        .setTitle("things to buy with lbot")
        .setColor(`RANDOM`)
	    .addFields(
            {name: "nothing", value: "1000 coins"},
            {name: "something", value: "1500 coins"},
            {name: "bog (bar of gold)", value: "3000 coins"},
            {name: "spam <message>", value: "5 bars of gold"}
        )

        message.channel.send(Embed);
	}

    }