module.exports = {
    name: 'naycacchau',
    description: 'Dùng khi sống đồi bại, trụy lạc',
    cooldown: 2,
    usage: 'naycacchau',
    async execute(client, message) {
        message.delete();
        message.channel.send('Này các cháu, ông hỏi. Đạo đức lý tưởng, thuần phong mỹ tục, lối sống văn hóa để ở đâu? Tại sao các cháu lại sống đồi bại, trụy lạc như vậy')
    }
}