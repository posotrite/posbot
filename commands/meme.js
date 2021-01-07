const {messageEmbed, MessageEmbed} = require('discord.js')
const api = require("imageapi.js")
module.exports = {
    name: 'meme',
    description: "meme command",
    async run (client, message, args){
        let subreddits = [
            "comedyheaven",
            "meme",
            "dankmemes",
            "memes"
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        let img = await api(subreddit)
        const memeembed = new MessageEmbed()
        .setTitle(`A meme from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor(`RANDOM`)
        .setImage(img)
        message.channel.send(memeembed)
    }
}