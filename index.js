const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "on Spero™",
            type: "STREAMING"
        }
    }); 
});

client.on("message", async message => {
    const prefix = "s!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

const serverStats = {
    guildID: '652546086141034517',
    totalUsersID: '652546086141034517',
    memberCountID: '652546086141034517'
  
  }
  
  //______________________When someone joins the server___________________
 client.on('guildMemberAdd', member => {
    
    client.channels.get(serverStats.memberCountID).setName(`Total Users: ${member.guild.members.filter(m => !m.user.bot).size}`);
   
  });
  //______________________When someone leaves the server__________________


  client.login(process.env.TOKEN);