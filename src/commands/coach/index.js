const { frases } = require('./frases');

function sayCoach(args) {
  const opcao = Math.floor(Math.random() * 100);
  let frase = frases(opcao);

  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/999358214330126428/bdcb6a98420cdddcb3f66f3b96441560.webp?size=600';
  const perfil = 'https://discord.com/users/999358214330126428';

  const embed = new EmbedBuilder()
  .setColor(0xB7432A)
  .setTitle('Cartoleta - Frases Desmotivacionais')
  .setURL(perfil)
  .setAuthor({ name: 'Cartoleta', iconURL: img, url: perfil })
  .setDescription('O Coach.')
  .setThumbnail(img)
  .addFields({ name: 'Saiba:', value: frase })
  return { embeds: [embed] };
}

module.exports = { sayCoach };