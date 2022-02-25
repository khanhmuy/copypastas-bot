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
				.setDescription(`VĂN MẪU DÙNG ĐỂ ÁP ĐẢO ĐỐI PHƯƠNG BẰNG NGÔN TỪ`)
				.addField('Prefix', 'Prefix hiện tại của tôi là \`' + prefix + '\` \nĐể bắt đầu, nhập \`' + prefix + 'help\` để xem các lệnh có sẵn.')
				.addField('Thêm Văn Mẫu Bot vào server của bạn', '[Nhấn vào đây để thêm Văn Mẫu Bot vào server của bạn](https://discord.com/oauth2/authorize?client_id=922041356384350208&permissions=274878295104&scope=bot)')
				.setColor('BLURPLE')
				.setURL('https://discord.com/oauth2/authorize?client_id=922041356384350208&permissions=274878295104&scope=bot')
			message.channel.send({ embeds: [ embed ] });
		}
	},
};