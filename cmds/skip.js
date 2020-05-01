module.exports.run = async (bot , message , args ,opt) => {
    let fetched = opt.active.get(message.guild.id)
    if (!fetched) return message.channel.send("You need to be in a voice channel to skip music!")
    if (fetched.connection.channel !== message.member.voice.channel) return message.channel.send("Sorry you're currently not in the same channel as the bot")
    message.channel.send("Successfully skipped song")
    return fetched.dispatcher.emit('finish')
}

module.exports.help = {
    name : "skip",
    info : "Passe au titre suivant"
}