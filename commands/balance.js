const { Database } = require("quickmongo");
const db = new Database("PUT MONGO DB HERE");
const ms = require('parse-ms');
const Discord = require('discord.js');
const bog = new Database("PUT MONGO DB HERE");
module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

        let user = message.mentions.users.first() || message.author;
        db.get(`money_${message.guild.id}_${user.id}`).then(i => {
            if (i === null) i = 0;
            bog.get(`barsofgold_${message.guild.id}_${user.id}`).then(b => {
                if (b === null) b = 0;
            message.channel.send(`${user} curently has ${i} coins and ${b} bars of gold`)
            });
        
        });

        
    }
}
