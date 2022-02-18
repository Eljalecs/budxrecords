module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Ninguna canción sonando en este server!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - No estás conectado en ningún canal de voz !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - No puedo ingresar al canal, por favor verifica mis permisos :(!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo salí mal, error: ${error}`);
    };

};
