const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'succac',
    description: 'dùng khi đang succak mà thấy bản thân quá đẹp trai',
    cooldown: 2,
    usage: 'nhay',
    aliases: ['succak'],
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/949522114237567006/78DDDE60-3991-4BAB-A514-9D328AD53E2D.mov')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};