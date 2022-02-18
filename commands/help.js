exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'PINK',
            author: { name: 'A ver tira el chisme' },
            footer: { text: 'Desarrollado por el motomoto sornero' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `Para usar filtros, ${client.config.prefix}filtro. Ejemplo : ${client.config.prefix}filter 8D.`,
        },
    });

};
