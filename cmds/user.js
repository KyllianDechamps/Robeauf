const Discord = require('discord.js')
module.exports.run = async (bot , message , args , opt) => {
    let user = message.mentions.users.first()

    let embed = new Discord.MessageEmbed()
    embed.setImage(user.displayAvatarURL())
    embed.setTitle(user.tag)
    embed.addField('ID',user.id)
    embed.addField('Créé le',user.createdAt)
    embed.setColor("LUMINOUS_VIVID_PINK")
    message.channel.send(embed)
    if (message.author.id === process.env.OWNER){
        message.channel.send("JE T AIME PAPA")
    }
}

module.exports.help = {
    name : "user",
    info : "Donne les infos d'un utilisateur du serveur",
    usage : "user [mention ou ID]"
}
