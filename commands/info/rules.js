const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "rules",
    aliases: ["rules"],
    description: "rules",
    usage: "-",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("#ff0000")
      
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setAuthor(`Rules`)
        .setDescription(`Regulile pentru discord sunt destul de simple, multe sunt de bun simț de bază, regulile sunt enunțate mai jos.

        • Fără a ocoli filtrul, acesta include filtrul de înjurături și link-uri. Filtrele există pentru a proteja membrii mai tineri.
        
        • Fără spaming/spaming cu caractere speciale (# @ $ ^! @ *).
        
        • Respecta alți utilizatori, aceasta include și membrii personalului.
        
        • Nu vorbiti despre religie sau politică, aceasta înseamnă protejarea opiniilor, de asemenea, eliminarea oricăror argumente.
        
        • Nu folosi rasism sau orice formă de discriminare, dacă ești rasist sau omofob, atunci vei fi mutat. Nu este tolerat deloc.
        
        • Nu încuraja sinucigarea, avem oameni de toate vârstele în discord-ul nostru.
        
        • Romana doar în chat-uri, pentru ca toți să înțeleagă ce spui.
        
        • Nu există publicitate în general, aceasta include și publicitatea DM. Este urat și neplăcut.
        
        • Fără a înfăptui pe nimeni în interiorul discordiei, aceasta înseamnă să oprești orice formă de ură față de oameni.
        
        **Personalul poate și va fi respins de toate pedepsele, după propria lor discreție.** Nu te certa cu personalul, deoarece toate pedepsele sunt definitive..`);

        message.channel.send(embed)
    }
};