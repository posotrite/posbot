
module.exports = {
    name: '8ball',
    description: "8ball command",
    async run (client, message, args){
        const Discord = require('discord.js');
        const {messageEmbed} = require('discord.js')
        const prefix = '~';
        let question = message.content.slice(prefix.length + 6);
        if (!question)
          return message.channel.send(`You did not specify your question!`);
        else {
          let responses = [
            "Yes",
            "No",
            "Definetly",
            "Absoloutely",
            "Not in a million years",
            "Quite possible",
            "100% no",
            "My sources say yes",
            "NO, DON'T ASK AGAIN!"
          ];
          let response =
            responses[Math.floor(Math.random() * responses.length - 1)];
            const ballembed = new Discord.MessageEmbed()
            .setTitle(`8Ball!`)
            .setDescription(`Your question: ${question}\nMy reply: ${response}`)
            .setColor(`RANDOM`);
          message.channel.send(ballembed);
        }
    
    
    
    
    
    
    }
}