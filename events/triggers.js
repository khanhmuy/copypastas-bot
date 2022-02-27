module.exports = {
    name: 'messageCreate',
    async execute(client, message) {
        try {
            const whoasked = {
                whoasked: [
                    "ai hỏi",
                    "who asked",
                    "who fucking asked",
                    "whoasked",
                    "whofuckingasked"
                ]
            };
            whoasked.whoasked.forEach(word => {
                if (message.content.includes(word)) {
                    message.reply({content: 'Ai mượn bạn nói mà cái địt mẹ bạn lúc lồn nào cũng "aI hỎi?". Là tôi, tôi đã hỏi. Thật là một cực hình khi phải nặng gánh trách nhiệm của một kẻ tội đồ đã đưa ra câu hỏi và giấu mình vào ngôi thứ ba. Trách nhiệm nặng như quả đất, đặt vào đôi bờ vai nhỏ bé của tôi. Nó như đè nát thân tâm tôi, nó rằng xé con người tôi bởi sức nặng khủng khiếp của Kẻ Đã Hỏi. Thật là một cực hình, quả là địa ngục trần gian, đúng là tra tấn man rợn. Nhưng cuối cùng, tôi cũng được giải phóng khỏi chuỗi ngày đau khổ đó. Đúng, là tôi, tôi đã hỏi, có vấn đề gì không?', allowedMentions: { repliedUser: false }})
                }
            })
        } catch(error) {
            console.log(error);
        }
    }
}