module.exports.run = async (bot , message , args , opt) => {
    let timemessage = message.createdTimestamp
    let now = Date.now()
    message.channel.send("Pong ! "+ (now-timemessage)+"ms")
}

module.exports.help = {
    name : "ping",
    info : "Envoie le temps de réponse en millisecondes",
    usage : "ping",
    disabled : false
}
