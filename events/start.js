module.exports = {
	name: 'ready',
	once: 'true',
	async execute(client) {
		client.user.setPresence({
			status: 'online',
			activity: {
				name: 'Copypastas',
				type: 'PLAYING',
			},
		});

		console.log(`Connection established! Logged in as ${client.user.tag} 🚀!`);
	},
};