module.exports = {
    name: "clear",
    aliases: ["purge", "nuke", "clean"],
    category: "moderations",
    description: "sterge mesaje",
    usage: "clear nr. de  mesaje",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Nu ai acces la comanda!").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send("Yeah.... 0 mesaje, nu se pot sterge.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Nu pot sterge mesajele!").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Am sters \`${deleted.size}\` de mesaje.`))
            .catch(err => message.channel.send(`Ceva este ineregula.. ${err}`));
    }
}