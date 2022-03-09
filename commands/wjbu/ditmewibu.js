const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'ditmewibu',
    description: 'Dùng khi có đứa chửi địt mẹ wibu',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('ĐỊT CON ĐĨ MẸ NHÀ MÀY LÚC SÚC VẬT, WIBU THÌ ĐÃ SAO HẢ MẤY CON CHÓ ĂN CỨC RẢNH LỒN KHÔNG CÓ CHUYỆN GÌ LÀM ĐI GATO VS WIBU HẢ? WIBU ĂN HẾT CÁI LỒN CON ĐĨ MẸ MÀY HAY GÌ CỨ HỞ TÍ WIBU LÀ SAO HẢ CÁI CON THÚ HOANG RÁC RƯỞI, ĐỊT HẾT CÁC ĐỜI TỔ TÔNG GIA PHẢ NHÀ CON ĐĨ MẸ MÀY, TAO WIBU THÌ SAO? TỤI MÀY KO ĐC LÀM WIBU NHƯ TỤI TAO RỒI TỤI M TỨK HẢ? TỤI MÀY ĐÉO CÓ GỐI ÔM CỦA REM ĐỂ ĐỤ NÊN TỨK HẢ? TỤI MÀY ĐÉO CÓ THIỂU NĂNG NHƯ TỤI TAO TỤI MÀY TỨK HAY GÌ? TAO LÀ 1 WIBU CHÂN CHÍNH NÊN ĐỪNG ĐỤNG VÔ TỤI TAO, NẾU CÒN ĐỤNG VÔ THÌ TAO SẼ HOÁ ZORO CẦM 3 THANH KIẾM CHÉM MÀY RA HÀNG TRĂM MẢNH RỒI CHO CÁ SẤU ĂN ĐÓ, ĐỤ MẸ TỤI T NGỒI K CŨNG CÓ ĂN NÈ ĐÂU NHƯ TỤI M LÀM NHƯ CHÓ TỚI CUỐI THÁNG MỚI CÓ LƯƠNG ĐÂU, TỤI TAO NGỒI K ĂN BÁT VÀNG NÈ CON ĐĨ MẸ TỤI MÀY, TAO TỨK QUÁ MÀ, DÒNG ĐĨ NỨNG LỒN, NỨNG CẶC GÌ ĐÂU K À 😡😡😡😡😡😡😡')
        message.channel.send({ embeds: [embed] });
    }
}