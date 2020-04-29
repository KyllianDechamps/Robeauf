const fs = require('fs')
module.exports.run = async (bot , message , args) => {
    bot.commands.forEach((f,i) =>{
        console.log(f.help.info)
    })
}

module.exports.help = {
    name : "help",
    info : "Commande d'aide"
}