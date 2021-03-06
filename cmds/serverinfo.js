module.exports.run = async (bot , message , args) => {
    var server = message.guild



    const embed = {
        color: 0x90ff00,
        description: "Server ID " +server.id,
        title: 'Info du serveur',
        image: server.icon,
        fields: [
            {
                name: 'Uptime',
                value: bot.uptime,
            },
            {
                name: 'Nombre de serveurs',
                value: bot.guilds.cache.array().length,
                inline: true,
            },
            {
                name: 'Nombre de beaufs',
                value: server.memberCount,
                inline: true,
            }
        ],
        timestamp: new Date()
    };

    await message.channel.send({embed : embed})
}

module.exports.help = {
    name : "serverinfo",
    info : "Donne toutes les infos du serveur",
    usage : "serverinfo",
    disabled : false
}
