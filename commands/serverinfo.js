const {messageEmbed, MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
module.exports = {
    name: "server",
    description: "Bleh",
  async run (client, message, args){
const {guild} = message
console.log(guild)
const {name, region, memberCount, owner, channels} = guild
const icon = guild.iconURL()
const embed = new Discord.MessageEmbed()
    .setTitle(`Server info for ${name}`)
    .setThumbnail(icon)
    .setColor(`RANDOM`)
    .addFields(
        {name: `Region:` , value: region},
        {name: `Members:` , value: memberCount},
        {name: `Owner` , value: owner.user.tag},
    )
message.channel.send(embed)
  }
}