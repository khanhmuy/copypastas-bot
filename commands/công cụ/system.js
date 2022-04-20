/* eslint-disable max-nested-callbacks */
const Discord = require('discord.js');
const si = require('systeminformation');
const nodeOS = require('os');
module.exports = {
	name: 'system',
	aliases: [ 'systeminfo', 'sysinfo', 'sysstat', 'sysstats' ],
	cooldown: 20,
	usage: 'system',
	description: 'Thông tin của tiến trình bot và server',
	async execute(client, message) {
		function convToDays(totalSeconds) {
			const days = Math.floor(totalSeconds / 86400);
			totalSeconds %= 86400;
			const hours = Math.floor(totalSeconds / 3600);
			totalSeconds %= 3600;
			const minutes = Math.floor(totalSeconds / 60);
			const seconds = Math.floor(totalSeconds % 60);
			const daysText = (days == 1 ? 'day' : 'ngày');
			const hoursText = (hours == 1 ? 'hour' : 'giờ');
			const minutesText = (minutes == 1 ? 'minute' : 'phút');
			const daysFinal = (days >= 1 ? days + ' ' + daysText + ', ' : '');
			const hoursFinal = (hours >= 1 ? hours + ' ' + hoursText + ', ' : '');
			const minutesFinal = (minutes >= 1 ? minutes + ' ' + minutesText + ' and ' : '');
			const finished = `${daysFinal}${hoursFinal}${minutesFinal}${seconds} giây`;
			return finished;
		}
		const sysmsg = await message.channel.send('Đang lấy thông tin...');
		si.cpu()
			.then(cpu => {
				si.mem()
					.then(mem => {
						si.osInfo()
							.then(os => {
								si.cpuTemperature()
									.then(temp => {
										si.currentLoad()
											.then(load => {
												const totalSeconds = (client.uptime / 1000);
												const uptime = convToDays(totalSeconds);
												const embed = new Discord.MessageEmbed()
													.setColor('GREEN')
													.setTitle(`Thông tin của tiến trình bot và server của ${client.user.username}`)
													.setTimestamp()
													.setFooter('Được yêu cầu bởi ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
													.addField('Thông tin tiến trình', `**⏱ Thời gian chạy bot** \n${uptime} \n**👥 Đang được dùng bởi** \n${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} thành viên \n**📗 Đang chạy** \n${process.release.name} ${process.version}`)
													.addField('Thông tin hệ thống', `**💻 Tên máy chủ** \n${os.hostname} \n**🤖 CPU** \n${cpu.cores} Core ${cpu.manufacturer} ${cpu.brand}@${cpu.speed}GHz ${process.config.variables.host_arch} \n**General CPU Load** \n${load.avgLoad}% \nNhiệt độ: ${temp.main}°c \n**⏱ Thời gian bật** \n${convToDays(nodeOS.uptime())} \n**🗄 Bộ nhớ** \nTổng bộ nhớ: ${(mem.total / 1000000000).toFixed(2)}GB \nBộ nhớ đã sử dụng: ${(mem.used / 1000000000).toFixed(2)}GB \nBộ nhớ trống: ${(mem.free / 1000000000).toFixed(2)}GB \n**Hệ điều hành** \n${os.distro} ${os.release} ${os.arch}`);
												sysmsg.delete();
												message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
											});
									});
							});
					});
			});
	},
};