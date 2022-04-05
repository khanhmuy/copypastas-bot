const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');

module.exports = {
	name: 'help',
	description: 'Help Command',
	usage: 'help [lệnh]',
	alases: ['giup', 'giupdo'],
	cooldown: 5,
	async execute(client, message, args) {
		const prefix = client.data.get(`guild.${message.guild.id}.prefix`);
		if (!args[0]) {
			const embed = new MessageEmbed()
				.setColor('BLURPLE')
				.setTitle('Lệnh')
				.setDescription(`Nhập \`${prefix}help [command]\` để xem thông tin lệnh.`)
				.setTimestamp()
				.setFooter('Cập nhật lần cuối');
			const commandFolders = fs.readdirSync('./commands');
			for (const folder of commandFolders) {
				if (folder.endsWith('.js')) {
					console.log(chalk.red(`File (${folder}) not in subdirectory, please move it. File has been ignored.`));
					return;
				}
				const array = [ ];
				const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
				for (const file of commandFiles) {
					const command = require(`../../commands/${folder}/${file}`);
					array.push(`\`${prefix}${command.name}\``);
				}

				embed.addField(folder, array.join(' '));
			}

			message.reply({ embeds: [ embed ], allowedMentions: { repliedUser: false } });
		} else {
			const search = args.join(' ');
			const results = new Array();
			const categoryDirectories = new Array();
			fs.readdirSync('./commands').forEach(c => categoryDirectories[categoryDirectories.length] = c);
			categoryDirectories.forEach(categoryName => {
				const cmdFileNames = fs.readdirSync(`./commands/${categoryName}`);
				cmdFileNames.forEach(cmdName => {
					const cmd = require(`./../${categoryName}/${cmdName}`);
					if (cmd.hidden && !cmd.searchable) return;
					if (cmd.name.includes(search)) return results[results.length] = cmd;
					if (cmd.aliases) if (cmd.aliases.includes(search)) return results[results.length] = cmd;
					if (cmd.description) if (cmd.description.includes(search)) return results[results.length] = cmd;
				});
			});
			if (!results[0]) return message.channel.send('Lệnh đó không tồn tại!');
			const names = new Array();
			results.forEach(x=>names[names.length] = `${names.length + 1}. ${x.name}`);

			let aliases = [ ];
			let usage = '';
			const command = results[0];
			if (command.aliases) {
				for (const alias in command.aliases) {
					aliases.push(`\`${prefix + command.aliases[alias]}\``);
				}
				aliases = aliases.join(', ');
			} else {
				aliases = `Không có tên nào khác dành cho ${prefix + command.name}`;
			}
			if (command.usage) {
				usage = `\`${prefix + command.usage}\``;
			} else {usage = 'Không có.';}
			const embed = new MessageEmbed()
				.setTitle(`${prefix + command.name}`)
				.setDescription(command.description)
				.addField('Tên khác', aliases, true)
				.addField('Cách dùng', usage, true)
				.setColor('BLURPLE')
				.setThumbnail('https://cdn.discordapp.com/avatars/922041356384350208/de5253811d2aff9e49b4780dfd6d8583.png?size=1024');
			message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
		}
	},
};