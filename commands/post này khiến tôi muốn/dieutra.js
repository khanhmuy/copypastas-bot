const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'sapdieutra',
    description: 'Dùng khi nhóm của bạn sắp bị điều tra',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
        .setDescription('Trong trường hợp nhóm này bị điều tra bởi các cơ quan trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN), tôi khẳng định mình không liên quan tới nhóm hoặc những cá nhân khác trong nhóm này. Tôi không rõ tại sao mình lại có mặt ở đây vào thời điểm này, có lẽ tài khoản của tôi đã được thêm bởi một bên thứ ba. Tôi cũng xin khẳng định rằng mình không hề giúp sức cho những hành động chống phá Đảng và nhà nước của các thành viên trong nhóm này')
    message.channel.send({ embeds: [embed] });
    }
}