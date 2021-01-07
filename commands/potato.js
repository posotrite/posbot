const {messageEmbed, MessageEmbed} = require('discord.js')
const api = require("imageapi.js")
module.exports = {
    name: 'potato',
    description: "potatoe command",
    async run (client, message, args){
        let subreddits = [
            "PotatoesAreFunny",
            "potato"
            
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        let img = await api(subreddit)
        const memeembed = new MessageEmbed()
        .setTitle(`a potato from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor(`RANDOM`)
        .setImage(img)
        message.channel.send(memeembed)



    }
}