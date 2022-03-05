module.exports = {
    name: 'khongquantam',
    description: 'Dùng khi ý kiến cá nhân của đối phương như lồn',
    aliases: ['deoaiquantam', 'khongaiquantam', 'deoquantam'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send({files: ['https://cdn.discordapp.com/attachments/942078114715037716/948550288543998002/6A061E92-9C11-4B7C-9CC1-C8FC04D1C35A.mov']})
    }
}