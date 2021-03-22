# Discord-template
A sample code to start your first Discord bot 🤖

If you need help, information or anything else with this project you can join the help server by just clicking [here](https://discord.gg/5cGSYV8ZZj).

### ⚡ Installation

To use this project you must have [Node.js](https://nodejs.org/en).

Create a new application in the Discord [developer portal](https://discord.com/developers/applications).

Complete the configuration file as follows :

```js
module.exports = {
    app: {
        token: ''
    },

    data: {
        prefix: '',
        activity: ''
    }
};
```

Change the token in the section `app > token`.

Change the prefix and activity of the bot in the section `data`.

Install the necessary modules with `npm install` in a command prompt (and in the bot folder).

Start your bot with `node index`.

### ☕ Credits

This project is currently maintained by ZerioDev.
If you want to be listed as a contributor you will have to contribute to the project.

Don't forget to leave a star if you like this project.