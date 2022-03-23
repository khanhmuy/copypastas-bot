const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'aihoi2',
    description: 'Dùng khi ai hỏi',
    alias: ['whoasked'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('A i h ỏ i? Mày không nghĩ được câu nào khác à. Bộ nhớ trong chiếc điện thoại/máy tính của mày không lưu trữ thứ gì khác ngoài cái meme có template từ 2012 à. Mày như một con chó săn vậy, mỗi ngày lên mạng chỉ chờ ai đó nêu quan điểm rồi ngay tức khắc mày kêu “ai hỏi”,  bạn rảnh rỗi đến thế sao? Mày là nỗi thất vọng của gia đình mày, không ai dạy mày là không ngắt lời người khác à. Bố mẹ mày sẽ nghĩ như thế nào, họ đã nuôi mày lớn, cho mày đi học để tiếp thu kiến thức của nhân loại. Để giờ đây, mày lên mạng và ẳng lên hai tiếng “ai hỏi”. Cái ai hỏi của mày đã ngăn cản mọi người nêu quan điểm của mình, đồng thời làm hình ảnh của mày trong mắt mọi người rằng bạn là một thằng thiểu năng suốt ngày “ai hỏi”. Ai hỏi cái con mẹ mày, loại não vẹt như mày không nên sống với loài người. Tắt điện thoại/máy tính và ra ngoài ban công hít thở không khí trong lành đi.')
        message.channel.send({ embeds: [embed] });
    }
}