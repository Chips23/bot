
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "verify",
    aliases: ["v"],
    description: "vs",
    usage: "-",
    run: async (client, message, args) => {
        if(message.author.bot) return;
        if(message.channel.id === '710167670636413008')
            await message.delete();
        if(message.content.toLowerCase() === 's!verify' && message.channel.id === '710167670636413008')
        {   
            await message.delete().catch(err => console.log(err));
            const role = message.guild.roles.cache.get('Unverifed');
            if(role) {
                try {
                    await message.member.roles.add(role);
                    console.log("Role added!");
                }
                catch(err) {
                    console.log(err);
                }
            }
        }
    
    }
};