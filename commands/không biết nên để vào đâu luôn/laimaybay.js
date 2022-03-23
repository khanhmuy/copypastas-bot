const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'laimaybay',
    description: 'dùng khi đang lái máy bay mà thấy mình quá đẹp trai',
    cooldown: 2,
    usage: 'laibaymay',
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/951402437544116274/836DBDF2-7BBA-4767-B47C-5DF1F603C763.mov')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};