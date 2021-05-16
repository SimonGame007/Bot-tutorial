const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args, prefix) => {

    const user = args[0] ? message.mentions.users.first() ||  client.users.cache.find(a => a.username === args.slice(0).join(' ')) || await client.users.fetch(args[0]).catch(_ => message.author) : message.author
const avatar = user.displayAvatarURL({ dynamic: true, size: 2048, format: 'png' })
const avatar2 = user.displayAvatarURL({ dynamic: true, size: 2048, format: 'gif' })
   const avatar3 = user.displayAvatarURL({ dynamic: true, size: 2048})
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, avatar)
      .setDescription(` __**PNG:**__
      **__[Clique Aqui](${avatar})__** 
      __**GIF:**__
      **__[Clique Aqui](${avatar2})__**
      `)
      .setImage(avatar3)
      .setColor("RANDOM")
      .setFooter(`Comando Executado por ${message.author.tag}` , message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embed)
    }
exports.help = {
    name: 'avatar',
    aliases: ['av'],
    status: 'on'
}
