const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");


module.exports = {
    name: "ban",
    aliases: ["b"],
    category: "moderations",
    description: "Interzice accesul unui membru pe server!",
    usage: `ban @user reson` ,
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.channel.send("**🚫 Membru negasit!**")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.channel.send("**🚫 Motivul lipseste..**")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("**🚫 Nu ai acces la comanda!**")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("**🚫 Nu ai acces la comanda!**")
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toBan) {
            return message.channel.send("**🚫 Membru negasit!**")
                .then(m => m.delete(5000));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.channel.send("**🚫 Nu pot sa-i dau ban!**")
                .then(m => m.delete(5000));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.channel.send("**🚫 Nu pot sa-i dau ban!**")
                .then(m => m.delete(5000));
        }
        
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(`Schizophrenic BOT: <> = required, [] = optional`)
            .setTimestamp()
            .setDescription(stripIndents`**> Baned member:** ${toBan} (${toBan.id})
            **> Baned by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`🚫 Sigur doresti sa faci asta ?`)
            .setDescription(`Continui cu ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`**🚫 Din pacate a aparut o eroare! M-ai incearca odata! ${err}**`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.channel.send(`**🚫 Ban canceled.**`)
                    .then(m => m.delete(10000));
            }
        });
    }
};