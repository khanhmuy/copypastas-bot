const {MessageEmbed} = require('discord.js');
module.exports = {
    name: '@chua',
    description: 'Khi post quá cursed',
    cooldown: 1,
    usage: '@chua',
    aliases: ['cursed', 'cursedpost'],
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('@КГБ СССР@nhà thờ @linh mục @interpol @cia  @Tổng cục 2 @M16 @FBI @mossad @SVR @BND @DGSE @ASIS @ISI @RAW @FSB @MSS @SIS @Tổng quan cơ quan\n@linh mục\n@chúa\n@FBI\n@nhà thờ\n@vatican\n@đức mẹ Maria\n@thiên đường\n@địa ngục\n@CIA\n@Interpol\nChúa cha, Chúa con và chúa thánh thần, hãy soi sáng cho đầu óc tội nghiệp chúng con, Amen 🙂')
        message.channel.send({ embeds: [embed] });
    }
}