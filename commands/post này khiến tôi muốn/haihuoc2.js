const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'haihuoc2',
    description: 'Dùng khi post của bạn thật hài hước nhưng khác tí',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Siêu hài hước, tôi đã cười sau khi đọc cap của bạn, sau đó tôi đưa cho bạn bè tôi, hõ cũng cười, gọi tôi là cây hài của lớp, khi tôi đưa cho crush, ngay lập tức tài khoản của cô ấy biến thành chữ Người dùng Facebook, khi bị các chú cảnh sát giao thông gọi vào, tôi không xuất trình giấy tờ xe hay bằng lái, mà thay vào đó tôi đưa các chú bài viết của bạn, tôi đã được thả đi ngay sau khi nộp trà đá 500k cho các chú, khi bị gọi đi nghĩa vụ quân sự, tôi đã được miễn nghĩa vụ bằng cách đưa người ta xem bài viết của bạn, thật sự cảm ơn bạn rất nhiều, nhờ bài viết của bạn mà tôi không còn muốn tự tử vào mỗi tối, tôi cảm thấy bớt tự ti hơn vì ngoài xã hội kia vẫn còn nhiều thằng hài hước như mình, tôi thật sự cảm ơn vì bài viết của bạn đã cho tôi nhiều hơn là tiếng cười.')
        message.channel.send({ embeds: [embed] });
    }
}