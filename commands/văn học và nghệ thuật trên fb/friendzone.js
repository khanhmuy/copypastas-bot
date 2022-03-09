const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'friendzone',
    description: 'Dùng khi chỉ muốn làm bạn.',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Làm bạn thôi cậu nhé. Lớn rồi.. Tình yêu phải cần thời gian và sự cố gắng của cả 2 mới có thể hình thành đươc. Không phải như trẻ con nữa mà cứ dăm ba câu là yêu được.. Lớn rồi. Có yêu bạn thì 2 ng cũng phải biết vì nhau nhé. Cố gắng cho cả 2 như vậy mới bên lâu được. Còn không nhanh rạn nứt lắm. Mà có yêu thì cũng đừng bỏ bê học hành nhé.. Học hành bây giờ quan trọng lắm đây, học để kiếm cái nghề cho mình. Kiếm đc vài đồng cho cái gia đình nhỏ bé sau này.. Vậy là được r. Bố mẹ bạn bè đều tin c.. Vậy hãy cố gắng lên nhé. Yêu 1 ng lâu còn hơn là lâu lâu yêu nhiều người.. Vậy nhé.. Cố lênnnn')
        message.channel.send({ embeds: [embed] });
    }
}