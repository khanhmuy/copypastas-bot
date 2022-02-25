module.exports = {
	name: 'ready',
	once: 'true',
	async execute(client) {
		client.user.setStatus({
			status: 'online',
		});
		client.user.setActivity('Văn mẫuz');
		console.log(`Connection established (${client.ws.ping}ms). Logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	},
};