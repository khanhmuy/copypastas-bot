const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'dungbaogioghetcacanh',
    description: ' Đừg 👐 bao zờ 😏 gkét 😡 các a 😢😭',
    aliases: ['dungbaogioghetbts', 'neverhatebts'],
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Đừg 👐 bao zờ 😏 gkét 😡 các a 😢😭, army 👉 củg zậy 😉đừg 🤫 bao zờ 😠 gkét 🤬 bangtan♥️😍😍 army xẽ 🙂 trịu hớt 🥺🥺 trịu hớt😣😵 ta^\'t kả😇 la` j fan😔 đừg la`m 😠 bangtan🤩 tổn tkưg 😭😭 army xẽ đau 🙁 nkư dao kắt 🔪🔪 kim đăm 💔💔')
        message.channel.send({ embeds: [embed] });
    }
}