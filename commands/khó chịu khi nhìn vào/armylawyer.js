module.exports = {
    name: 'luatsucuaarmy',
    description: 'Luật sư của army',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        message.channel.send('Chào em, chị là luật sư của army và đã thu thập đủ bằng chứng em xúc phạm army của công ty bên chị. Em vui lòng xóa bài này sau 30 phút. Nếu sau 30 phút mà em vẫn chưa xóa bài thì bên chị sẽ dùng tới pháp luật và em sẽ bị lôi đầu ra Côn Đảo !')
    }
}