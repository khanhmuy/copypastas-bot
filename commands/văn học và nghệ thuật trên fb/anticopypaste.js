const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'anticopypaste',
    description: 'Cả đời này mình ghét nhất ai mà chuyên comment copy paste lại',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Cả đời này mình ghét nhất ai mà chuyên comment copy paste lại, bộ mấy bạn lựa lời đàng hoàng nói không được hả hay bị cạn ý tưởng. Làm vậy là không tôn trọng người đăng post, cũng tự làm hại bản thân bạn bị thụt lùi đấy, đề nghị mấy bạn chấn chỉnh lạiCả đời này mình ghét nhất ai mà chuyên comment copy paste lại, bộ mấy bạn lựa lời đàng hoàng nói không được hả hay bị cạn ý tưởng. Làm vậy là không tôn trọng người đăng post, cũng tự làm hại bản thân bạn bị thụt lùi đấy, đề nghị mấy bạn chấn chỉnh lạiCả đời này mình ghét nhất ai mà chuyên comment copy paste lại, bộ mấy bạn lựa lời đàng hoàng nói không được hả hay bị cạn ý tưởng. Làm vậy là không tôn trọng người đăng post, cũng tự làm hại bản thân bạn bị thụt lùi đấy, đề nghị mấy bạn chấn chỉnh lạiCả đời này mình ghét nhất ai mà chuyên comment copy paste lại, bộ mấy bạn lựa lời đàng hoàng nói không được hả hay bị cạn ý tưởng. Làm vậy là không tôn trọng người đăng post, cũng tự làm hại bản thân bạn bị thụt lùi đấy, đề nghị mấy bạn chấn chỉnh lạiCả đời này mình ghét nhất ai mà chuyên comment copy paste lại, bộ mấy bạn lựa lời đàng hoàng nói không được hả hay bị cạn ý tưởng. Làm vậy là không tôn trọng người đăng post, cũng tự làm hại bản thân bạn bị thụt lùi đấy, đề nghị mấy bạn chấn chỉnh lại')
        message.channel.send({ embeds: [embed] });
    }
}