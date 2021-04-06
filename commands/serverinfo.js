const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "server-info",
    category: "extra",
    run: async (client, message, args) => {
        const region = {
            brazil: ':flag_br: Brasil',
            europe: 'Europa',
            hongkong: 'Hong Kong',
            india: 'Índia',
            japan: 'Japão',
            russia: 'Rússia',
            singapore: 'Singapore',
            southafrica: 'Africa do Sul',
            sydney: 'sydney',
            uscentral: 'US Central',
            useast: 'US East',
            ussouth: 'US Sul',
            uswest: 'US West'
          }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name}`)
            .addFields(
                {
                    name: "Dono de servidor: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membros ",
                    value: `${message.guild.memberCount} membros!`,
                    inline: true
                },
                {
                    name: "Membros online",
                    value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} membros online!`,
                    inline: true
                },
                {
                    name: "Bots: ",
                    value: `${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Criado em: ",
                    value: message.guild.createdAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: "Quantidade de cargos ",
                    value: `${message.guild.roles.cache.size} cargos.`,
                    inline: true,
                },
                {
                    name: `🗺 Região: `,
                    value: region[message.guild.region],
                    inline: true
                },
                {
                    name: `Verificado: `,
                    value: message.guild.verified ? 'Esse servidor é verificado!' : `Esse servidor não é verificado`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : `Esse servidor não tem boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} emojis!` : 'Esse servidor não tem emojis!' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
exports.help = {
    name: 'serverinfo'
}