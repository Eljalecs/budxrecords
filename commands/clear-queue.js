exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás ne un canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ninguna cancion sonando !`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - la lista ha sido eliminada !`);

};
