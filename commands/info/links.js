const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "links",
    aliases: ["l"],
    description: "links",
    usage: "-",
    run: async (client, message, args) => {
        const ok = client.emojis.get("638506452436123648");
        const no = client.emojis.get("638506452050509844");
        const embed = new RichEmbed()
        .setColor("#ff0000")
      
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setAuthor(`Links `+ ok + no)
        .setDescription(`Toate media noastră socială sunt mai jos, dacă găsiți ceva care poartă numele nostru, dar nu este mai jos, atunci nu este afiliat cu noi sau cu niciuna din proprietățile deținute!`)
        .addField("Application" , `• Staff: https://area-games.ro/forum/index.php?/forum/4216-cerere-admin/
        • Server: https://area-games.ro/forum/index.php?/forum/4211-basebuilder-bb/
        • IP: 188.212.102.235:27015 `)
        .addField("Other" , `• Invite: https://discord.gg/46JBYs5
        • Patreon: https://paypal.me/aleku23`)
        .setFooter(`Schizophrenic BOT: <> = required, [] = optional`)
        message.channel.send(embed)
    }
};