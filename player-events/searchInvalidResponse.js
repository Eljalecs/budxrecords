module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Envía un número entre **1** and **${tracks.length}** !`);

};