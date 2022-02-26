module.exports = {
    name: 'haihuoc',
    description: 'Dùng khi post của bạn thật hài hước',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        message.channel.send('Xin chào bạn, tôi là nhà tuyển dụng của tập đoàn giải trí Rạp xiếc Trung Ương Group. Trong quá trình tìm kiếm và đào tạo những người hài hước của chúng tôi (đi săn chất xám và nhân tài) tôi nhận thấy bạn là người có khiếu hài hước, tập đoàn chúng tôi thật sự cần một chú hề đúng nghĩa, tôi đã thấy bạn vừa mở mồm là mọi người đã cười ầm lên, không cần phải biểu diễn. Đặc biệt đối với chúng tôi thì những vị trí lãnh đạo rạp xiếc cấp cao phải tìm người "có tâm, có tầm" Một môi trường của những thiên tài hề, xung quanh bạn là những nhân vật: cha đẻ của tiếng cười, nhà khoa học hề, chúa hề địa phương, bait đồ tể, chúa tể rạp xiết Môi trường làm việc năng động, hài hước')
    }
}