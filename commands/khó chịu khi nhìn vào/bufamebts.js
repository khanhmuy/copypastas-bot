const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'bufamebts',
    description: 'Làm trò khùng điên bú fame BTS hoài vậy?',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('chị ơi chị làm trò khùng điên bú fame BTS hoài vậy?chị không biết cách dùng instagram một cách văn minh à? chị đừng trách sao nước biển lại mặn, con cu lại nghe mùi nước đái nha. em đã chụp hình instagram của chị rồi. Ngày mai ảnh này sẽ có mặt ở trên mail em gửi tới Big Hit Entertainment vì tội làm trò bú fame BTS trên mạng xã hội. Em cho chị cơ hội, chị hãy xoá status này đi và hãy đăng những câu chuyện về BTS và trở thành army thì chị sẽ được bình yên. Còn không thì ngày mai em với chị hẹn nhau ở đồn cảnh sát')
        message.channel.send({ embeds: [embed] });
    }
}