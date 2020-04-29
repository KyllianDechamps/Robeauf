const fs = require('fs') , discord = require('discord.js')
module.exports.run = async (bot , message , args) => {




    var embed = new discord.MessageEmbed();
    await bot.commands.forEach((f,i) =>{
        embed.addField(f.help.name,f.help.info)
    })
    embed.setColor([255,0,255])

    await message.channel.send(embed)
}

module.exports.help = {
    name : "help",
    info : "Commande d'aide"
}