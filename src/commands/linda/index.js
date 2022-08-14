function sayLinda(args) {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/742496431784329236/612d78d0ccbfb72576432b012ae1ae9d.webp?size=600';
  const perfil = 'https://discord.com/users/742496431784329236';

  
  const embed = new EmbedBuilder()
  .setColor(0x9900FF)
  .setTitle('A mais linda do server')
  .setURL(perfil)
  .setAuthor({ name: 'Lanna', iconURL: img, url: perfil })
  .setDescription('Ela é top das galáxias e no multiverso todo!')
  .setThumbnail(img)
  .addFields(
    { name: 'Sobre a ela:', value: 'Essa mulher maravilhosa, de CRIA - diga-se de passagem, é uma mulher que não apenas sabe é uma líder de um bando de crias incríveis, como também é uma mulher intelectual e bem nerdzinha. Nos seus tempos vagos, ela gosta de ouvir proibidões, digo, músicas eróticas, opa quis dizer exóticas! (tá difícil hoje), mas também, é uma mulher eclética e ouve desde músicas os anos 90 até as mais atuais, ela é um estouro e tá solteira? ulalau, hein!' },
    { name: 'Extrovertida', value: '😎', inline: true },
    { name: 'Linda de Morrer', value: '💁‍♀️ ♀️', inline: true },
    { name: 'Engenheirinha', value: '👷‍♀️🧱', inline: true },
    { name: 'Jogadora de Vôlei', value: '🤽🏻‍♀️', inline: true },
    )
    .setImage(img)
    .setTimestamp()
    .setFooter({ text: 'A mais bela de todas entre todas', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayLinda };
