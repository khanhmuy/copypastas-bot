const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'aiss',
    description: 'Aissssssssssssssssssssssssssssss, bởi vì ta thích ngươi quá, phải làm sao đây, làm sao bây giờ?',
    async execute(client, message) {
        const embed = new MessageEmbed
            .addFields(
                {name: 'English', value: 'Aissssssssssssssssssssssss, because I like you so much, what to do, what to do? Can you see that? What to do, what to do? Smile, can\'t you see that? Don\'t worry about it, just smile, laugh, smile, Aiissssss is so excited for you, it\'s a distraction...'},
                {name: 'Tiếng Việt', value: 'Aissssssssssssssssssssssssssssss, bởi vì ta thích ngươi quá, phải làm sao đây, làm sao bây giờ? Bạn có thể thấy điều đó? Phải làm gì, phải làm gì? Cười đi, bạn không thấy sao? Đừng lo lắng về điều đó, chỉ cần mỉm cười, cười, mỉm cười, Aiissssss rất vui mừng cho bạn, đó là một sự phân tâm...'},
                {name: 'русский язык', value: 'Aisssssssssssssssssssssssssssss, потому что ты мне так нравишься, что делать, что делать? Вы можете видеть, что? что делать, что делать? Улыбнись, разве ты не видишь? Не беспокойся об этом, просто улыбайся, смейся, улыбайся, Айисссссс очень рада за тебя, это отвлекает...'},
                {name: '日本語', value: 'Aissssssssssssssssssssssssssss、私はあなたがとても好きなので、何をすべきか、何をすべきか？何が見えますか？何をすべきか、何をすべきか？笑って見えない？それについて心配しないでください、ただ微笑んで、笑って、微笑んでください、Aiissssssssはあなたにとってとても幸せです、それは気が散ります...'}
            )
            .setColor('RANDOM')
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
    }
}