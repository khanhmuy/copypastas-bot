module.exports = {
    name: 'phatbieunhucc',
    description: 'Dùng khi đối phương phát biểu như lồn',
    aliases: ['thieunang'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send({files: ['https://cdn.discordapp.com/attachments/942078114715037716/944243359164293210/video-1642483989.mp4']})
    }
}