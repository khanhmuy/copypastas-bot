module.exports = {
    name: 'ga',
    description: 'Dùng khi bạn bị chửi là gà',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        message.channel.send('chỉ với một tiếng \'\'Gà\'\' mà nó đã khiến trái tim toi thổn thức, muốn vỡ ra làm từng mảnh, khóe mắt muốn ứa lệ... Sao ông lại có thể nặng lời với tôi như thế, ông thật phũ phàng, ông có biết lời nói của ông như con dao đâm vào trái tym mỏng manh íu đíu này hiccc')
    }
}