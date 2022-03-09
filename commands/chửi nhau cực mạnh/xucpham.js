const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'xucpham',
    description: 'Dùng khi bạn bị xúc phạm nặng nề',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Địt con mẹ mày mày thích mất dạy không thằng lồn? Đụ đỉ mẹ mày con súc vật nông dân móng chân vàng đừng có để tao phải tìm thấy cái mặt lồn nhà mày rồi tao lại bửa nát tử cung khai thông buồng trứng con mẹ mày đấy. Địt con mẹ mày mày thích mất dạy không thằng lồn đụ đỉ con mẹ mày đừng để tao phải tìm ra cái mặt lồn con mẹ mày rồi tao lại tọng vào lồn con đĩ mẹ mày 1000 cái xà beng nung đỏ và 100 tấn xi măng bít lồn con đĩ mẹ mày địt cả lò nhà mày địt từ hoa kỳ sang pháp địt từ pháp sang việt nam địt từ lồn mẹ mày sâu tới tâm trái đất địt cả họ hàng nhà mày mày thích mất dạy không đụ thằng cha con gái mẹ mày thằng lồn thất bại của tạo hóa đụ con đĩ bà già ông cố nội mày thằng cức người để tao gặp mày lần nữa thì đụ con đĩ mẹ mày 1001 cái sextoy đâm vào lồn con mẹ mày. Đụ con đĩ mẹ mày con súc vật lấc cấc mồm lồn còn hôi sữa mà cứ mở họng ra là tỏ vẻ bố thiên nhiên mẹ thiên hạ à con súc vật cái lồn chó má cả lò nhà mày chỉ là vật lót đường thứ lót dái cho tao mà thôi cho nên đừng có để bố mày phải tìm ra cái mặt lồn con đĩ mẹ mày rồi tao lại bít xi măng chằng mạng nhện bện lá khoai cái lồn mẹ mày lại nhé.')
        message.channel.send({ embeds: [embed] });
    }
}