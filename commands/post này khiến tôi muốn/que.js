module.exports = {
    name: 'que',
    description: 'Dùng khi ai đó bị quê',
    alias: ['cue'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        message.channel.send('Bạn thực sự là một quái vật nhà quê, kẻ hủy diệt lòng tự trọng, tổng tư lệnh xấu hổ, chiến thần hề, country god, chúa tể đội quần, tù trưởng hài hước, đại đội trưởng trung đoàn nông thôn, thần thoại nhục nhã, huyền thoại quê mùa, thần đồng quê kệch, lãnh chúa của các thế hệ đội giỏ Việt, người viết lên kịch bản phim người nhà quê, trùm chui xuống lỗ, tướng quân gáy lớn, thầy dạy phản biện, ông tổ ngành cãi, trùm trường luật, thiên tài tranh biện, người đột biến hệ nhột.')
    }
}