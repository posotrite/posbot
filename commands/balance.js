const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://lbot:190315@cluster0.2emrs.mongodb.net/<dbname>?retryWrites=true&w=majority");
const ms = require('parse-ms');
const Discord = require('discord.js');
const bog = new Database("mongodb+srv://lbot:190315@cluster0.2emrs.mongodb.net/<dbname>?retryWrites=true&w=majority");
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