const {messageEmbed, MessageEmbed} = require('discord.js')
const api = require("imageapi.js")
module.exports = {
    name: 'reddit',
    description: "subreddit of your choice",
    category: "Reddit",
    usage: '<Subreddit>',
    async run (client, message, args){
        let Subreddit = message.content.slice(8)
        if(!Subreddit)return message.channel.send("You did not specify a subreddit!")
        try{
            let img = await api(Subreddit)
            const Embed = new MessageEmbed()
            .setTitle(`A random post from r/${Subreddit}`)
            .setColor(`RANDOM`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${Subreddit}`)
            message.channel.send(Embed)
        }
        catch(err){
           return message.channel.send("there was an error getting that subreddit!")
        }
    }
}