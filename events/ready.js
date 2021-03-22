module.exports = (client) => {
    console.log(`${client.user.username} is connected to the WebSocket`);

    client.user.setActivity(client.config.data.activity);
};