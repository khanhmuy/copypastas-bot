const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'huan',
    description: 'Dùng khi không làm mà vẫn có ăn',
    aliases: ['huanrose', 'rose', 'khonglamvancoan'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Ra xã hội làm ăn bươn trải liều thì ăn nhiều không liều thì ăn ít muốn thành công thì phải chấp nhận trải qua đắng cay ngọt bùi làm ăn muốn kiếm được tiền phải chấp nhận mạo hiểm 1 ít nhưng phải trong tầm kiểm soát xã hội này, chỉ có làm, chịu khó, cần cù thì bù siêng năng chỉ có làm thì mới có ăn nhưng cái loại không làm mà đòi có ăn thì ăn đầu b*** ăn *** nói thế cho nó nhanh .Muốn người ta quý mình thì mình phải quý người ta trước .Những người cho mình vay tiền lúc khó khăn lúc mình khổ lúc mình vỡ nợ không phải là người ta ngu , mà vì chính người đó mình nên tôn trọng, bởi những người đó coi mình là anh em bạn bè thì những lúc mình khó khăn khổ người ta mới đưa tiền cho mình vay')
        message.channel.send({ embeds: [embed] });
    }
}