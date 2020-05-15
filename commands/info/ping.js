module.exports = {
    name: "ping",
    aliases: ["pings", "p"],
    category: "info",
    description: "ping-ul botului",
    usage: "ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`**🏓 | Pong! Latency is ${Math.round(client.ping)}ms**`)
        
    }
}