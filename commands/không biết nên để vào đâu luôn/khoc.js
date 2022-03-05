module.exports = {
    name: 'khoc',
    description: 'Dùng khi bạn muốn khóc',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send({files: ['https://cdn.discordapp.com/attachments/942078114715037716/948550275722006578/45A468AF-8528-4E2E-9F0A-02B777F1A691.mov']})
    }
}