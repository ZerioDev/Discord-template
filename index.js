const { Client, Collection } = require('discord.js');

const client = new Client();

client.config = require('./config');
client.commands = new Collection();

require('./util/loader.js')(client);

client.login(client.config.app.token);