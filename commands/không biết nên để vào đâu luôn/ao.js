const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'aothatday',
    description: 'dùng khi ảo vcl',
    cooldown: 2,
    usage: 'aothatday',
    aliases: ['aovl'],
    async execute(client, message) {
        const video = new MessageAttachment('https://cdn.discordapp.com/attachments/942078114715037716/952482998585024522/779BD2BE-D3FC-468D-90E5-6378FCEE83FD.mov')
        message.reply({ files: [video], allowedMentions: { repliedUser: false } });
    }
};