const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'finalratio',
    description: 'finalratio',
    usage: 'finalratio',
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('dont care + didnt ask + cry about it + stay mad + get real + L + mald seethe cope harder + hose mad + basic + skill issue + ratio + you fell off + the audacity + triggered + any askers + redpilled + get a life + ok and + cringe + touch grass + donowalled + not based + not funny didnt laugh + go outside + get good + reported + ad hominem + ask deez + ez clap + straight cash + ratio again + final ratio + stay mad + stay pressed + you like children + cancelled + done for + mad + free + freer than air + rip bozo + slight_smile + cringe again + mad cuz bad + lol + irrelevant + cope + jealous + go ahead whine about it + your problem + dont even care + not okay + glhf + problematic + no father figure')
        message.channel.send({ embeds: [embed] });
    }
}