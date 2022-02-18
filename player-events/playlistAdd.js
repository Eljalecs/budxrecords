module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} Ha sido agregada a la lista de  (**${playlist.items.length}** canciones) !`);

};