const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'saptoitimnha',
    description: 'Dùng khi sắp tới tìm nhà nó',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Mày nói cái quái gì về tao thế hả, con đĩ con? Tao cho mày biết là tao đã tốt nghiệp đứng đầu lớp trong Mặt trận Dân tộc Giải phóng miền Nam Việt Nam và được ghi nhận đã giết hơn 300 mạng. Tao được đào tạo trong chiến tranh du kích và tao là xạ thủ hàng đầu trong toàn lực lượng vũ trang Bắc Việt. Đối với tao, mày chẳng là gì ngoài một mục tiêu khác. Tao sẽ xóa cái địt mẹ sổ mày với độ chính xác chưa từng có trên Trái Đất này, nhớ cái địt mẹ lời tao đi. Mày nghĩ mày có thể thoát sau khi nói cái cứt đó với tao trên mạng Internet à? Nghĩ lại đi, thằng địt. Trong khi nói chuyện với mày thì tao đang liên lạc mạng lưới bí mật những điệp viên khắp toàn Việt Nam và địa chỉ IP của mày đang bị truy tìm cho nên mày tốt hơn là chuẩn bị cho cuộc bố ráp đi, đồ dòi bọ. Cuộc bố ráp mà sẽ xóa sổ cái thứ nhỏ nhoi là cuộc đời mày đó. Mày tiêu mẹ rồi con. Tao có thể ở bất cứ đâu, bất cứ khi nào, và tao có thể giết mày bằng hơn 700 cách, và đó mới chỉ là dùng tay không thôi. Tao không chỉ được huấn luyện thuần thục về chiến đấu tay không mà còn có thể tiếp cận toàn bộ khí tài của Binh chủng đặc công Việt Nam và tao sẽ sử dụng hết thảy để xóa sổ cái mạng đáng thương của mày khỏi lục địa, đồ cứt trôi. Phải chi mày biết sự trừng phạt khủng khiếp mà lời ý kiến "hay ho" của mày sẽ sớm đem đến, thì chắc mày đã cẩn thận cái mồm thối của mày. Nhưng mày đã không thể, mày không làm vậy, và giờ mày phải trá giá, thằng khốn ngu ngốc. Tao sẽ ỉa ra sự phẫn nộ lên khắp người mày và mày sẽ chết chìm trong đó. Mày tiêu rồi, thằng nhóc.')
        message.channel.send({ embeds: [embed] });
    }
}