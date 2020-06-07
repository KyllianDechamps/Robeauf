module.exports.run = async (bot , message , args) => {
    await message.author.send('```Javascript\n'  +
        'module.exports.run = async (bot , message , args , opt) => {\n' +
        '    //Ce que ma commande doit faire\n' +
        '}\n' +
        '\n' +
        'module.exports.help = {\n' +
        '      name : "macommande",\n' +
        '      info : "Explication de la commande",\n'+
        '      usage : "Utilisation de la commande"\n'+
        '      disabled : "true ou false"\n'+
        '}```')
    await message.reply('Je t\'ai envoyé un message')
}

module.exports.help = {
    name : "template",
    info : "Envoie un template de commande en MP",
    usage: "template",
    disabled : false
}
