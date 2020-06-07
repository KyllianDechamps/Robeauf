const fs = require('fs')
module.exports.run = async (bot , message , args , opt) => {

    let file = fs.readFileSync('./files/video.json')
    let json = JSON.parse(file)
    console.log(json.length)

}

module.exports.help = {
    name : "papafranky",
    info : "Joue un titre de Franky Vincent",
    usage : "Cette commande n'est pas terminée"
}
