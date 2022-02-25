module.exports = {
    name: 'ykiencanhan',
    description: 'Dùng khi ý kiến cá nhân của đối phương như lồn',
    aliases: ['ykien'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send({files: ['https://cdn.discordapp.com/attachments/942078114715037716/944254618458804264/video-1642483988.mp4']})
    }
}