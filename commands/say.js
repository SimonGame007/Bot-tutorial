const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!args.join(" ")) return message.reply("Digite um texto exemplo: `lm!say <mensagem>!`")
  const sayMessage = args.join(' ');
   message.delete().catch(O_o => {});
  message.channel.send(sayMessage + `\n\n_<a:alerta:799804301484621884> Executado por:_ ` + message.author.tag);
};