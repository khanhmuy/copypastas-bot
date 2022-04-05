module.exports = {
	name: 'stats',
	description: 'Show bot statistics.',
	aliases: [ 'statistics' ],
	usage: 'stats',
	cooldown: 5,
	async execute(client, message) {
		const embed = {
			color: 'BLURPLE',
			title: 'Xin chào! Tôi là Văn Mẫu Bot.',
			thumbnail: {
				url: 'https://cdn.discordapp.com/avatars/922041356384350208/de5253811d2aff9e49b4780dfd6d8583.png?size=1024',
			},
			fields: [
				{
					name: 'Số server đang dùng tôi',
					value: `${client.guilds.cache.size}`,
					inline: true,
				},
				{
					name: 'Đang được dùng bởi',
					value: `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`,
					inline: true,
				},
				{
					name: 'Số thành viên ở trong server này',
					value: `${message.guild.memberCount}`,
					inline: true,
				},
				{
					name: 'Tổng số tin nhắn đã nhận',
					value: `${client.data.get('msgCounterTotal')}`,
					inline: true,
				},
				{
					name: 'Tổng số lệnh đã nhận',
					value: `${client.data.get('cmdCounterTotal')}`,
					inline: true,
				},
			],
			footer: {
				text: 'Cập nhật lần cuối',
			},
			timestamp: new Date(),
		};
		message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
	},
};