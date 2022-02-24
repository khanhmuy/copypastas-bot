const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'messageCreate',
	execute(client, message) {
		if (!message.guild || message.author.bot) return;
		client.data.ensure(`guild.${message.guild.id}.prefix`, '!');

		const prefix = client.data.get(`guild.${message.guild.id}.prefix`);
		if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
			const embed = new MessageEmbed()
				.setTitle('Xin chào! Tôi là Văn Mẫu Bot')
				.setDescription(`Prefix hiện tại của tôi là \`${prefix}\`\n Để bắt đầu, nhập \`${prefix}help\` để xem các lệnh có sẵn.`)
				.setColor('BLURPLE')
			message.channel.send({ embeds: [ embed ] });
		}
	},
};