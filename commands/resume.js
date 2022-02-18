exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ninguna canción programada !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Canción ${client.player.getQueue(message).playing.title} **Continúa** !`);

};
