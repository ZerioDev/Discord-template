const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'informations',

    execute(client, message) {
        const categories = [];
        client.commands.forEach((command) => categories.includes(command.category) ? false : categories.push(command.category));

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle('Help');
        embed.setThumbnail(client.user.avatarURL());
        embed.setDescription('Find all the commands here');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

        categories.map((category) => {
            const cmd = client.commands.filter((cmd) => cmd.category === category);

            embed.addField(category.charAt(0).toUpperCase() + category.slice(1), cmd.map((x) => '`' + x.name + '`').join(', '));
        });

        embed.setTimestamp();
        embed.setFooter('Template by ZerioDev/Discord-template');

        message.channel.send(embed);
    },
};