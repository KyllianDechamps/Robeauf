module.exports.run = async (bot , message , args) => {

    var uptime = bot.uptime
    var date = new Date(uptime)

    var sec = Math.floor((date.getTime()/1000)%60)
    var minutes = Math.floor(((date.getTime()/1000)/60)%60)
    var heures = Math.floor(date.getTime()/1000/60/60)



    const exampleEmbed = {
        color: 0x00ff00,
        title: 'Info du bot',
        url: 'https://discord.js.org',

        description: 'Un bot de blague beauf',
        thumbnail: {
            url: bot.user.avatarURL,
        },
        fields: [
            {
                name: 'Uptime',
                value: heures+'h '+minutes+'m '+sec+'s',
            },
            {
                name: 'Nombre de serveurs',
                value: bot.guilds.cache.array().length,
                inline: true,
            },
            {
                name: 'Nombre de beaufs',
                value: bot.users.cache.array().length -1,
                inline: true,
            }
        ],
        timestamp: new Date()
    };

    await message.channel.send({ embed: exampleEmbed });


}

module.exports.help = {
    name : "botinfo"
}