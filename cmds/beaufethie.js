module.exports.run = async (bot , message , args) => {
    let number = Math.floor(Math.random() * 365) + 1
    message.reply("In " + String(number) + " days, " + String(message.channel) + " will recieve some image of the beaufitude")
}

module.exports.help = {
    name : "beaufethie"
}