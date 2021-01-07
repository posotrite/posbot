const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://lbot:190315@cluster0.2emrs.mongodb.net/<dbname>?retryWrites=true&w=majority");
const bog = new Database("mongodb+srv://lbot:190315@cluster0.2emrs.mongodb.net/<dbname>?retryWrites=true&w=majority");
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "bleh",

    async run (client, message, args) {
        let user = message.author;
        let arguments = message.content.slice(5).split(/ +/);
    const item = arguments.shift().toLowerCase();
    db.get(`money_${message.guild.id}_${user.id}`).then(i => {
        bog.get(`barsofgold_${message.guild.id}_${user.id}`).then(b => {
    if(item === "nothing"){

    if(i>= 1000 ) {
    db.add(`money_${message.guild.id}_${user.id}`, -1000);
    message.channel.send("well, you spent your money on nothing, congratulations!")
    }
    
    else{
        message.channel.send("you do not have enough money to buy this")
    }
}
else if(item === "something"){
    if(i >= 1500 ) {
    db.add(`money_${message.guild.id}_${user.id}`, -1000);
    message.channel.send("something is something... you probably regret this purchase!")
    }
    else{
        message.channel.send("you do not have enough money to buy this")
    }
}
else if(item === "bog"){
    if(i >= 3000) {
    db.add(`money_${message.guild.id}_${user.id}`, -3000);

    message.channel.send("You purchased one bar of gold, use it wisely!")
    db.add(`barsofgold_${message.guild.id}_${user.id}`, 1);
    }
    else{
        message.channel.send("you do not have enough money to buy this")
    }
}
else if(item === "spam"){
    if(b >= 3000) {
    db.add(`barsofgold_${message.guild.id}_${user.id}`, -5);
    message.channel.send("spam time!")
    let spams = message.content.slice(10)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    message.channel.send(spams)
    
    }
    else{
        message.channel.send("you do not have enough money to buy this")
    }
}
        });
}); 

        
    }
}