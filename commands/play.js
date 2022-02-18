exports.run = async (client, message, args) => {

    /*if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz quedaste mamanding !`);*/

    /*if (!args[0]) return message.channel.send(`${client.emotes.error} - Indica el nombre de la canción !`);*/

    client.player.play(message, args.join(" "));

};
