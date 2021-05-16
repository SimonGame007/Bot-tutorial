const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("Você precisa mencionar alguém pra beijar")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} Beijou ${user} `,{
                embed: {
                    image: {
                        url: "https://imgur.com/w1TU5mR.gif"
                    }
                }
            })
}
   
