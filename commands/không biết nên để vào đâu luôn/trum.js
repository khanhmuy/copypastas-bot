const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'trum',
    description: 'dùng khi server vắng',
    cooldown: 2,
    usage: 'trum',
    aliases: ['top1'],
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/951402455407689728/F3E7CEDA-680A-4BD0-A712-8B5E97F016A2.mov')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};