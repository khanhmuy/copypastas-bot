const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'vanmau',
    description: 'Dùng khi đối phương dùng văn mẫu',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Văn mẫu cái địt mẹ mày? Nhà trường cho mày học văn từ khi mới bập bẹ tiếng việt những năm mẫu giáo cho đến tận 12 năm sách vở trên ghế nhà trường và mày vẫn chỉ biết dùng văn mẫu trên mạng? Trông mày chả khác gì một thằng thất bại sống trong một vòng lặp thất bại tạo thành cả một cuộc đời thất bại cả. Mày có nghĩ đến cảnh ba mẹ mày gồng lưng cho mày ăn học chưa? Mày có nghĩ đến cảnh giáo viên dạy văn mày vô tình bắt gặp mày trên mạng và bật khóc khi biết rằng những dòng mày thở ra chỉ là ctrl c ctrl v từ một ai đó thậm chí mày còn đéo thể biết? Muốn sống như một công dân có ích cho xã hội thì từ bỏ văn mẫu giúp tao cái, bố thằng loser.')
        message.channel.send({ embeds: [embed] });
    }
}