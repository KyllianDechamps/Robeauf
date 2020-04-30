const ytdl = require('ytdl-core')
module.exports.run = async (bot , message , args) => {

    //Check le canal vocal (Si l'auteur est bien dedans + si le bot a les permissions)
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }

   voiceChannel.join().then(connection => {
       const dispatcher = connection.play(ytdl(args[0]))
        dispatcher.on("finish", () => {
            voiceChannel.leave()
            message.channel.send("Je suis parti")
        })
   })


}

module.exports.help = {
    name : "music",
    info : "Explication de la commande"
}

