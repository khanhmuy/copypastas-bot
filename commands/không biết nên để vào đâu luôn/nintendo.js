const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'nintendo',
    description: 'fuck nintendo',
    cooldown: 2,
    usage: 'nintendo',
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/951402510021701672/IMG_0210.jpg')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};