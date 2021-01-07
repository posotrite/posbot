const {messageEmbed, MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
const api = require("imageapi.js")
module.exports = {
    name: 'egg',
    description: "egg command",
    async run (client, message, args){
        let subreddits = [
            "egg"
            
            
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        let img = await api(subreddit)
        const memeembed = new MessageEmbed()
        .setTitle(`an egg from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor(`RANDOM`)
        .setImage(img)
        message.channel.send(memeembed)


    }
}