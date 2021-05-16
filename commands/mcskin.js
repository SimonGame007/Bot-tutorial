const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('Cite um nick de minecraft!')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Nickname: ${args[0]}`)
        .setDescription(` **[Baixe-a](https://mc-heads.net/body/${args[0]})**`)
        .setImage(`https://mc-heads.net/body/${args[0]}`)
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
    message.channel.send(embed)
}

exports.help = {
    name: 'mcskin',
    aliases: ['skin']
}
