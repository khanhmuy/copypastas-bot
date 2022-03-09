const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'godhiphop',
    description: 'Dùng khi bạn muốn cho biết thế nào là hip hop',
    cooldown: 1,
    async execute(client, message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('tHế nÀo ‼️⁉️ lÀ hJp hOp 😤😤😖😖 dÂy cHuYềN vÀnG🏅🏅🏆🏆🎖 lÈ lƯỡI lẤy Le 😝😝 mỚi GọI 🗣🗣 lÀ hJp hOp🤡🤡 tAy 🤲🤚🖕 cHâN 🦶🦵 mIệNg👄👅 xỎ nHiỀu pÁnK xE 🍩🍩⭕️⭕️ mỚi gỌi🗣🗣 lÀ hJp hOp 😎😎🤪🤪 mẮt hÍp 👁👀 mỒm hÓp👄💋👅 LuÔn nGhĨ 🤨🧐mÌnH gUcCi 😎😎🤡🤡 cHỉ kHiẾn m nGu 🤪🤪 đI 🚶‍♂️🚶‍♂️bỞi vÌ hJp hOp 🙏😤 đẾn tỪ tRoNg tƯ dUy 🧠🧠 mÃi mÃi 🙊🙊 ĐứNg đẰnG sAu 🚶‍♂️👉🚶‍♂️cẮn 🥶😬 cÀnG 🦀🦞 lÉn tHì cÀnG🦀🦞 đAu 😖😖 cẢ đỜi m ChỈ nGưỚc 🤥🤥😲😲 tHeO t m mUốN lEo cAo 🧗‍♀️🧗‍♀️ nHưNg kO tHể ❌💢🚫⭕️ bẰnG nHaU kO ⭕fLeX kO ⭕fLeX nHư dIễN vIêN xIếC 🤹‍♂️🤹 dA kHôNg cẦn tHa tHu 🦁🦅🕷 nHạC 🎵🎶 vẪn lUôN LiT 🔥🔥 kO cẦn lẤc cẤc 👌🖕🤞 nHư đI 🚶‍♂️🚶‍♂️ vÀo tAbOo cHó 🐕🐕 cẮn cÀn 🥶😬 tHưỜnG lÀ tHíCh nHe rĂng 😁😁 cHấT rẮn vÀnG 🏆🏅🎖 đÒi gẮn xÍcH xE🚗🚗 tĂnG ⬆️⬆️ nÊn hỌc nÓi 🗣🗣 tRưỚc kHi m hỌc ăN 😮🐶 bỎ qUêN cÁcH fAt Âm kHi tỤi m hỌc vĂn 💯💯 brrrzzz.. 🤡🤡🤡')
        message.channel.send({ embeds: [embed] });
    }
}