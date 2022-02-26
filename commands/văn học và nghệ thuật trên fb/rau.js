module.exports = {
    name: 'rau',
    description: 'Dùng khi ai đó nhắc đến rau củ',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        message.channel.send('Đi được hơn 400 đào của kỹ nữ, rút ra 1 số kinh nghiệm: 1. Chỉ chọn bánh uy tín, đừng chọn vì hình 2. Mấy em 1 triệu trở lên đa phần bơm vú, còn rẻ quá cũng khó có chất lượng, nên ăn tầm 3. Khu có nhiều đào đẹp nhất là Phú nhuận rồi tới q8, q10 4. Khách sạn đẹp sạch thì ở q8, phú nhuận siu cũ siu 500-600-700 5. Thường thường đào nào mà cho mình đợi lâu thì cũng service công nghiệp luôn, nên nếu anh em đợi quá 30 phút ko thấy tới thì nên lỗ tiền ks đi về, còn hơn gặp tức thêm 6. Mấy đào càng trẻ thì service càng yếu, nhưng nếu mình nâng niu ẻm như người iu thì.... Các pác sẽ thấy sự đền đáp ngọt ngào 7. Góp ý mấy ông bánh nên check pm trả lời khách feedback, vì mấy ông lười check người ta thấy ko còn đường phản hồi mới report xấu đào mấy ông thôi, chứ chả ai ác đâ')
    }
}