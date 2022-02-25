module.exports = {
    name: 'memehay',
    description: 'Dùng khi bạn muốn khen meme của ai đó',
    aliases: ['nicememe', 'nicememebro', 'memehayday'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send('Này ông, tôi không biết mọi người thấy meme này như thế nào, nhưng đối với tôi, nó tuyệt lắm, cơ mà có vẻ như nó không đáp ứng được tiêu chí là một món ăn tinh thần cho anh em trong group và cả tôi, tôi chắc chắn rằng ông có thể tạo ra những meme còn tuyệt hơn như thế này nhiều, tôi và cả anh em trong group cảm thấy thật hạnh phúc khi có ông trong group, chúng tôi tự hào và xúc động về những cố gắng ông đã đóng góp để phát triển group của chúng ta, tôi thật may mắn vì đã gặp được ông, chào ông và thân ái')
    }
}