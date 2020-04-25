module.exports.run = async (bot , message , args) => {
    await message.author.send('```Javascript\n'  +
        'module.exports.run = async (bot , message , args) => {\n' +
        '    //Ce que ma commande doit faire\n' +
        '}\n' +
        '\n' +
        'module.exports.help = {\n' +
        '    name : "macommande"\n' +
        '}```')
    await message.reply('Je t\'ai envoyé un message')
}

module.exports.help = {
    name : "template"
}