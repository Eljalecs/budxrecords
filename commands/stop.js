exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ningunca canción sonando !`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - Música parada en éste server!`);

};
