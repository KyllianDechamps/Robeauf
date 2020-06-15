const Discord = require('discord.js')
const http = require('http')
module.exports.run = async (bot , message , args , opt) => {

    let data =''
    http.get('http://api.kd-dev.be/beauf/data/jokes',(res)=>{
        const {statusCode}= res

        if (statusCode !== 200){
            message.channel.send("Je ne peux pas fournir de blague pour le moment . Code erreur "+statusCode)
        }else{
            res.on('data', (chunk) => {
                data+=chunk
            })
            res.on('end',()=>{
                const obj = JSON.parse(data);
                const min = 0, max = obj.length;
                const rand = Math.floor(Math.random() * (max - min) + min);
                let embed = new Discord.MessageEmbed()
                embed.setColor("RANDOM")
                embed.addField("BEAUF", obj[rand].blague)
                message.channel.send(embed)
            })
        }

    })

}

module.exports.help = {
    name : "blague",
    info : "Envoie une blague grasse",
    usage : "blague",
    disabled : false
}
