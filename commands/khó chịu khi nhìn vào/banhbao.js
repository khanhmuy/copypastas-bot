const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'banhbao',
    description: 'Dùng khi bánh bao cái mẹ gì đấy',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Má có mỗi thế này thôi có phải là bánh bao đâu mà mọi người kêu là bánh bao Chả hiểu seoo lunn 🥺 Thề!!!! Khum ăn được đouuu 😕 Nháaa . . Đúng dồiiii đấy Anh í nói đúng đếyy 😕 Rõ ràng 💁🏼‍♀️ Em có mỗi một cái má thế lày mà anh nào cũng bảo là:" Cho nựng iii, cko cắn iii". Roiii cắn nguyên người tôiii lunn 🥺 Chả hỉu mụi người có bít thưn hoa tiếc ngọc khum nữa 🥺 .. .. Đinn à ! Cả nkà cửa cụa mìk ckỉ có mũi céi má này mà kiuu cắn, Đinn à 😡Seooo sống 😡 Hửmmm×2 .. Dẹo á ! Lần đầu tiên có người bảo mìk dọng dẹo lunn í 😳! Thật, ai ckơi lâu với mìk sẽ bít là dọng mìk nói như thế 🥺 Với lại không phải dọng em dẹo đouuu bởi vì tuổi em nó cũng nhỏ í 🥺 Thế nên tông nó cũng chưa lớn ?????????? Em còn chưa 16 cơ mà mọi người 😳 Seooo mà bẻo dọng em dẹo được 🥺')
        message.channel.send({ embeds: [embed] });
    }
}