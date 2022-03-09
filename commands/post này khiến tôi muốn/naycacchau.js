const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'naycacchau',
    description: 'Dùng khi sống đồi bại, trụy lạc',
    cooldown: 2,
    usage: 'naycacchau',
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Này các cháu, ông hỏi. Đạo đức lý tưởng, thuần phong mỹ tục, lối sống văn hóa để ở đâu? Tại sao các cháu lại sống đồi bại, trụy lạc như vậy')
        message.channel.send({ embeds: [embed] });
    }
}