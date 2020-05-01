const ytdl = require('ytdl-core')
module.exports.run = async (bot , message , args,opt) => {

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


    //Recup infos
    let info = await ytdl.getInfo(args[0])

    let data = opt.active.get(message.guild.id) || {}
    if(!data.connection) data.connection = await voiceChannel.join()
    if (!data.queue) data.queue = []
    data.guildID = message.guild.id

    //Info queue
    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        annonceChannel : message.channel.id
    })


    //Dispatcher check

    if(!data.dispatcher) await play(bot,opt,data)
    else{
        message.channel.send(`Added to queue: ${info.title} | Requested by ${message.author.id}`)
    }

    //Map update
    opt.active.set(message.guild.id , data)




}

module.exports.help = {
    name : "music",
    info : "Envoyez un lien youtube"
}

async function play(client,opt,data) {


    //Now playing
    client.channels.fetch(data.queue[0].annonceChannel).then(channel => channel.send(`Now playing : ${data.queue[0].songTitle} | Requested by  ${data.queue[0].requester}`))
    //Update dispatcher
    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url ))
    console.log(data.queue[0].url)
    data.dispatcher.guildID = data.guildID

    data.dispatcher.once('finish',function (){
        finish(client,opt,data.dispatcher)
        console.log("Fini")
    })
}

function finish(client,opt,dispatcher) {
    let fetched = opt.active.get(dispatcher.guildID)
    console.log(opt.active)
    console.log(dispatcher.guildID)
    console.log(fetched)
    fetched.queue.shift()
    //Check if queue empty
    if (fetched.queue.length > 0){
        opt.active.set(dispatcher.guildID,fetched)
        play(client,opt,fetched)
    }else{
        opt.active.delete(dispatcher.guildID)
        let vc = fetched.connection.channel
        if (vc) vc.leave()
    }

}