const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["whois", "who" ,"user","info"  ],
    category: "info",
    description: "afla ceva despre un membru",
    usage: "whois or whois user",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
        .setFooter(`Schizophrenic BOT: <> = required, [] = optional`)
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL)
        .setColor('#000000')

            .addField('Member Information:',`
            **>  📅 Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

            .addField('User Information:', `
            **> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> 📅 Creation:** ${created}`, true)
          
            .addField('Currently playing!', `
            **> Name:** ${member.user.presence.game.name}..`);
            
        if (member.user.presence.game);
            

        message.channel.send(embed);
    }
}