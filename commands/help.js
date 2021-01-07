const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "help commands",
    async run (client, message, args){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Lbot')
	    .setURL('https://discord.com/oauth2/authorize?client_id=746808625711939614&scope=bot&permissions=2146958847')
	    .setDescription('All commands for Lbot')
	    .setThumbnail('https://i.imgur.com/eiaViv2.jpeg')
	    .addFields(
	    	{ name: 'Basic commands', value: '~ping -- returns pong!\n ~hello -- returns Hello! \n ~finger -- the middle finger \n ~help -- returns a list of all commands' },
	    	{ name: 'Reddit commands', value: '~potato -- returns a potatoe from a potato subreddit \n ~meme ~ returns a meme from a meme subreddit \n ~egg -- returns an egg from an r/egg\n ~reddit <subreddit> -- returns an image from a subreddit of your choice!'},
			{ name: 'Music commands', value: '~play <youtube url or song name> -- plays a song in your voice channel \n ~stop -- stops the music\n ~skip -- plays the next song in queue or on youtube'},
			{ name: 'Fun commands', value: "~8ball <insert questions> -- ask the 8ball a questions"},
			{ name: 'Currency commands', value: "~bal <mention user(optional)> -- returns the balance of a user \n ~work -- work and return a certain amount of money \n ~daily -- recieve a daily amount of money each day! \n ~buylist -- lists a lists of items you can buy \n ~buy <item> -- buy something using your money!" },
			{name: 'Minecraft commands', value: '~9b9t -- returns the status of the 9b9t minecraft server\n ~mcs <server ip> -- returns the status of a minecraft server'},
			{name: 'Server commands', value: '~server -- returns the information about the server'}
			)
	    .setTimestamp()
	    

        message.channel.send(exampleEmbed);
	}

    }
