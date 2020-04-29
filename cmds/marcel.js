const fs = require('fs')
module.exports.run = async (bot , message , args) => {
    //Lecture du dossier contenant les images de Marcel
    fs.readdir('./images/marcel',  (err,files) => {
        if (err) console.log(err)
        let nbimages = files.length
        let random = Math.floor(Math.random() * nbimages)
        message.channel.send({files: ["./images/marcel/"+files[random]]})
    })
}

module.exports.help = {
    name : "marcel",
    info : "Envoie une photo de marcel"
}