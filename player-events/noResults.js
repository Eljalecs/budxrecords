module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - Ninguno resultado hallado para ${query} !`);

};