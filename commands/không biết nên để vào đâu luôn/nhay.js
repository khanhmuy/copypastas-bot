const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'nhay',
    description: 'dùng khi server vắng',
    cooldown: 2,
    usage: 'nhay',
    aliases: ['grvang'],
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/949522095493222450/B33102A8-A28A-4ED7-9883-06025DE62C3A.mov')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};