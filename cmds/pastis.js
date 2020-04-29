const fs = require('fs')
module.exports.run = async (bot , message , args) => {
    //Lecture du dossier contenant les images de Pastis
    fs.readdir('./images/pastis',  (err,files) => {
        if (err) console.log(err)
        let nbimages = files.length
        let random = Math.floor(Math.random() * nbimages)
        message.channel.send({files: ["./images/pastis/"+files[random]]})
    })
}

module.exports.help = {
    name : "pastis"
}