function sayCartoleta(args) {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/999358214330126428/bdcb6a98420cdddcb3f66f3b96441560.webp?size=600';
  const perfil = 'https://discord.com/users/999358214330126428';

  const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('O Cartoleta')
  .setURL(perfil)
  .setAuthor({ name: 'Cartoleta', iconURL: img, url: perfil })
  .setDescription('Apenas um bot novo, será que dá bom?')
  .setThumbnail(img)
  .addFields(
    { name: 'Sobre:', value: 'O Cartoleta é um bot em desenvolvimento, será que algum dia, ele se tornará um bot que deverá ser desativado por aprender coisas demais a ponto de criar uma própria consciência sobre as coisas da vida?!\n\nDescobriremos juntos.' },
    { name: 'Mensagem:', value: 'Faça o que está dentro; aquilo que importante, é estupefaciante. Eu te hackearia, mas fazer o que eu tive que dormir?', inline: false },
    { name: 'Hobbie', value: 'Aprender coisas novas', inline: true },
    { name: 'Estou vendo', value: 'Você!', inline: true },
    { name: 'Adora um', value: 'Tempinho provocando a Loritta', inline: true },
    )
    .setImage(img)
    .setTimestamp()
    .setFooter({ text: 'Nós somos os robôs, prisioneiros da tecnologia que dominamos.', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayCartoleta };