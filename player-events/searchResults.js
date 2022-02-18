module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'PINK',
            author: { name: `Aquí están tus resultados ${query}` },
            footer: { text: 'Developed by el motomotosornero' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};