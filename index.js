const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
//cole o link que aparecerá em cima do console e cole no uptime robot
const Discord = require("discord.js"); //livraria Discord.js
const client = new Discord.Client(); //Criando um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log(`Logado com ${client.user.username}`)
});

client.on('message', message => { 
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
}); //criando novo evento

client.on('message', async message => {
    if (message.channel.type == 'dm') return;
    
    let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`];
    mention.find(mention => {
        if (message.content === mention) {
        message.channel.send(`Olá ${message.author} meu prefixo é \`${config.prefix}\` use \`${config.prefix}help\` para obter ajuda`)

        }
    });
}); //menção 

client.login(process.env.TOKEN); //Crie um arquivo chamado .env escreva TOKEN=token 