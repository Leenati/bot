const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Покажет все доступные команды.",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('Тут должно быть описание, но его нет. Странно.')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: '200к 300к 500к миллион', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};