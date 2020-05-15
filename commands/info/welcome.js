const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "welcome",

    description: "welcome",
    usage: "-",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("#ff0000")
      
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setAuthor(`Welcome`)
        .setDescription(`__**Spero™**__ este un grup restrâns de oameni care s-au reunit pentru a crea pas cu pas un loc uimitor. Deși nu suntem experți în ceea ce facem, totuși, dorim să împărtășim prietenia si bucuria catre orice și cu toata lumea.`);

        message.channel.send(embed)
    }
};