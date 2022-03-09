const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'tuduy',
    description: 'Dùng khi bạn muốn sửa đổi tư duy',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('MỘT TƯ DUY HẾT SỨC LỆCH LẠC VÀ VÔ NHÂN\nNgười làm ra meme này, hoặc là trẻ tuổi kém trí, hoặc là tàn ác vô nhân. Mình không ưa những người dân chủ cuội, những người té nước theo mưa, hoặc chính trị cơ hội. Đây không phải là một điều đáng cười, nó đáng buồn. Hãy thử nghĩ về công an của bạn, nếu giả sử bạn đang bị hành hung, nhưng công an không đến giúp bạn chỉ vì sự khác biệt trong tư duy, tôn giáo, quan điểm chính trị của bạn, điều đó có đúng không? Các bạn sẽ bảo rằng, anh Sang chỉ nói lý thuyết, xã hội thực sự nó như vậy. Mình biết chớ. Nhưng xã hội vận hành như vậy, có đúng không? Xưa kia, xã hội cũng tin rằng, phù thủy phải bị thiêu sống, điều đó có đúng không? Tạo hoá cho mình cái não, hãy suy nghĩ. Nếu không, bạn sẽ chỉ đơn thuần là con sâu, cái kiến cho người khác lợi dụng.')
        message.channel.send({ embeds: [embed] });
    }
}