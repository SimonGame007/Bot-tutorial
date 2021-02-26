const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setDescription(`Olá ${message.author} meu prefixo é l! e aqui estão meus comandos: `)
  message.channel.send(embed)
}