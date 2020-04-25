module.exports.run = async (bot , message , args) => {
    let number = Math.floor(Math.random() * 365) + 1
    message.reply("In " + String(number) + " days, " + String(message.channel) + " will recieve some image of the beaufitude")
    let role = null
    await message.guild.roles.fetch().then(list => list.cache.array().forEach(roleInArray => roleInArray.name === 'profete de la beaufethie' ? role = roleInArray : role = false)).catch(console.error)
    if (!role){
        // Create a new role with data and a reason
        await message.guild.roles.create({
            data: {
                name: 'profete de la beaufethie',
                color: 'YELLOW',
                position: 0,
                permissions: 1,
                mentionable: true,
            },
            reason: "You're the one",
        })
            .then(role_tmp => role = role_tmp)
            .catch(console.error);
    }
    let rmember = message.guild.member(message.author.id)
    await rmember.roles.add(role)
}

module.exports.help = {
    name : "beaufethie"
}