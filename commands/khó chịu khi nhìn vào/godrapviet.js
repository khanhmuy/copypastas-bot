const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'godrapviet',
    description: 'Dùng khi đối phương là bố của rap việt',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Ôi, đúng là quái vật Rap việt, kẻ hủy diệt punchline, tổng tư lệnh gun bả, chiến thần chơi chữ, Lỷical god, chúa tể gieo vần, tù trưởng fastflow, đại đội trưởng trung đoàn battle, no1 vipro thí sinh top1 king of rap, thần thoại concept, huyền thoại freestyle, đức chúa rapper, King rap lỏd, lãnh chúa của các thế hệ F1,2,3, người viết lên bí quyết các trận beef, trùm đảo chữ, cụ tổ lái từ , thủy tổ delivery, tướng quân chơi Trap, thầy dạy oldschool, ông tổ autotune, Trùm vocal,thiên tài no beat, Vị thần content, người đột biến Hệ rap, quái thú đồng âm, chiến thần đa nghĩa, dị nhân hán việt, Thần đồng ngôn ngữ, kẻ nắm giữ fact rap việt. Tune thủ quốc gia')
        message.channel.send({ embeds: [embed] });
    }
}