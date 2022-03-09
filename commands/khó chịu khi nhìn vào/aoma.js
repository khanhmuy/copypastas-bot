const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'aoma',
    description: 'Dùng khi đối phương đăng cái gì đó rất là ảo ma',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Dcm ảo ma Lazada Estonia Latvia Lithuania Austria Albania Croatia Serbia Slovenia Bulgaria Romania Russia Slovakia Canada Cuba Guatemala Jamaica Argentina Bolivia Colombia Venezuela Georgia Saudi Arabia Syria India Sri Lanka China Mongolia North Korea South Korea Cambodia Indonesia Malaysia Myanmar Australia Algeria Ghana Libya Nigeria Tunisia Maria Ozawa nhảy chachacha và Nobita làm Shizuka nhòe đi Mascara thật đấy')
        message.channel.send({ embeds: [embed] });
    }
}