module.exports = {
    name: 'ping',
    aliases: ['pong'],
    category: 'client',

    execute(client, message) {
        return message.channel.send(`🏓 | ${message.author.username}, latency of the WebSocket **${client.ws.ping}ms**.`);
    },
};