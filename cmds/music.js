module.exports.run = async (bot , message , args,opt) => {

    if(!message.member.voice.channel) return message.channel.send(`**You're not in a voice channel**`);

    if (!args[0]) return message.channel.send(`**Please enter a music**`);

    const aSongIsAlreadyPlaying = opt.player.isPlaying(message.guild.id);

    // If there's already a song playing
    if(aSongIsAlreadyPlaying){
        // Add the song to the queue
        const song = await opt.player.addToQueue(message.guild.id, args.join(" "),message.author).catch(err => {
            console.error(err)
        });
        message.channel.send(`**Song ${song.name} added to queue**`);
    } else {
        // Else, play the song
        const song = await opt.player.play(message.member.voice.channel, args.join(" "),message.author).catch(err => {
            console.error(err)
        });
        message.channel.send(`**Currently playing ${song.name}**`);
    }

}

module.exports.help = {
    name : "music",
    info : "Envoyez un lien youtube",
    disabled : true,
    usage : "music LienYoutube"
}
