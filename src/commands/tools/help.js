function sayHelp() {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/999358214330126428/bdcb6a98420cdddcb3f66f3b96441560.webp?size=600';
  const perfil = 'https://discord.com/users/999358214330126428';


  const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('O Cartoleta - Help')
  .setURL(perfil)
  .setAuthor({ name: 'Cartoleta', iconURL: img, url: perfil })
  .setDescription('Aqui você vê os meus comandos.')
  .setThumbnail(img)
  .addFields(
    { name: 'Comandos:', value: 'Começam com $' },
    { name: '$help', value: 'Informações sobre quais comandos estão disponíveis.', inline: false },
    { name: '$oi', value: 'Verifica se o bot está ativo.', inline: false },
    { name: '$cartoleta', value: 'Apresentação do bot Cartoleta.', inline: false },
    { name: '$linda', value: 'Retorna o perfil da mais linda do discord.', inline: false },
    { name: '$bela', value: 'Retorna o perfil da mais bela do discord.', inline: false },
    { name: '$docinho', value: 'Retorna o perfil da mais doce do discord.', inline: false },
    { name: '$coach', value: 'Retorna frases desmotivacionais pra melhorar (ou não) seu dia.\nNão recomendado pelos psicólogos em dias de melancolia.', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Nós somos os robôs, prisioneiros da tecnologia que dominamos.', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayHelp }