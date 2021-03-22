const fs = require('fs');

module.exports = (client) => {
    const events = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

    for (const file of events) {
        const event = require(`../events/${file}`);
        console.log(`Loaded event ${file.split('.')[0]}`);
        client.on(file.split('.')[0], event.bind(null, client));
    };

    fs.readdirSync('./commands/').forEach(dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const command = require(`../commands/${dirs}/${file}`);
            console.log(`Loaded command ${command.name.toLowerCase()}`);
            client.commands.set(command.name.toLowerCase(), command);
        };
    });
};