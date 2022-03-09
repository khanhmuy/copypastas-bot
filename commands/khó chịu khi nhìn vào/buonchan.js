const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'buonchan',
    description: 'Dùng khi bạn đang buồn chán',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Trong khi ông đang buồn chán thì rất có thể cô ấy đang phải chịu đựng những cú thúc mạnh bạo từ phía sau của 1 gã bụng phệ nào đó, cả người cô ấy giật giật theo từng nhịp thúc, mồ hôi nhễ nhại, mái tóc đen bóng của cô ấy bị gã đó nắm và kéo ngửa về phía sau, bờ môi thơm tho ấy đang mở rộng há hốc, cặp mắt bồ câu xinh đẹp ngày nào đang trợn trắng lên, cái lưỡi mềm mại thò hẳn ra bên ngoài miệng cô gái đó và vắt sang 1 bên cùng dòng nước miếng đang chạy xuống chiếc cổ thon dài. Rồi bất chợt ông tỉnh giấc lại, thở hồng hộc và nhìn sang bên trái tay mình. Phù, thật may cô ấy vẫn ở đấy, ở bên ông chứ ko phải đang vui vẻ bên gã bụng phệ nào đấy')
        message.channel.send({ embeds: [embed] });
    }
}