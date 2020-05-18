const fs = require('fs') , discord = require('discord.js')
module.exports.run = async (bot , message , args) => {



if (args[0] && bot.commands.find(f => f.help.name == args[0])){

    var command = bot.commands.get(args[0])
    var embed = new discord.MessageEmbed()
    embed.setTitle(command.help.name)
    embed.setColor("RANDOM")
    embed.addField("Info", command.help.info , true)
    embed.addField("Usage", process.env.PREFIX + command.help.usage , true)

    message.channel.send(embed)

}else{
    var embed = new discord.MessageEmbed();
    await bot.commands.forEach((f,i) =>{
        embed.addField(f.help.name,f.help.info)
    })
    embed.setColor("RANDOM")

    await message.channel.send(embed)
}

}

module.exports.help = {
    name : "help",
    info : "Commande d'aide",
    usage : "help [command name]"
}