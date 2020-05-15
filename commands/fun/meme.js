const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    aliases: ["memes", "m"],
    category: "fun",
    description: "meme-uri epice",
    usage: "memes",
   
    run: async (client, message, args) => {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["dankmeme", "meme", "me_irl"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setFooter(`Schizophrenic BOT: <> = required, [] = optional`)
        message.channel.send(embed);
    }
}