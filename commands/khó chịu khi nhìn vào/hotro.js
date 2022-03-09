const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'hotro',
    description: 'Dùng khi bạn cần hỗ trợ',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('CÁC BẠN NHÂN VIÊN ƠI, CÁC BẠN HỖ TRỢ MÌNH VỚI. CÁC BẠN ƠI CÁC BẠN ĐƯA NHẦM ĐỒ CHO MÌNH CÁC BẠN ƠI. CÁC BẠN NHÂN VIÊN HỖ TRỢ ƠI. CÁC BẠN HỖ TRỢ MÌNH KHÔNG CÁC BẠN ƠI. CÁC BẠN ĐIẾC À CÁC BẠN ƠI HỖ TRỢ MÌNH KHÔNG CÁC BẠN ƠI.')
        message.channel.send({ embeds: [embed] });
    }
}