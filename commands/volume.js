exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ninguna canción sonando`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor ingresa un número !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Ingresa un número válido (between 1 and 100) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Volume es **${args.join(" ")}%** !`);

};
