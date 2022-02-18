exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ninguna canción sonando :c !`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - Canción ${client.player.getQueue(message).playing.title} **pausada** !`);

};
