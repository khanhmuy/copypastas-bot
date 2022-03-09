const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'toilanhat',
    description: 'Dùng khi bản thân bạn là nhất',
    aliases: ['tln', 'taolanhat'],
    usage: 'toilanhat',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Bố mày không nhất chả lẽ mày nhất à ? T nói thật là t đã chán ghét cái chuyện hít chung 1 bầu không khí với loại hạ đẳng như mày. Có lẽ t đã dành quá nhiều thời gian để khai sáng cái não chó của mày nhưng điều đó đ thể được. Cái loại hạ đẳng như mày ra đường gặp t thì cúi cái mặt xuống, khệnh khạng t chả sút cho lòi mồm. Đjt mẹ thằng loser này 🙂')
        message.channel.send({ embeds: [embed] });
    }
}