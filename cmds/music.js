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

    console.log(args[0])
    bot.queue.push(args[0])
    console.log(bot.queue)



    if(bot.queue.length !== 0){
        bot.queue.forEach((song,i)=>{
            voiceChannel.join().then(connexion =>{
                const dispatcher = connexion.play(ytdl(song))
                dispatcher.on("finish",()=>{
                    bot.queue.shift()
                })
            })
        })

    }else{
        voiceChannel.leave()
    }






}

module.exports.help = {
    name : "music",
    info : "Envoyez un lien youtube"
}

