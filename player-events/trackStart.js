module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - Está sonando! ${track.title} en ${message.member.voice.channel.name} ...`);

};