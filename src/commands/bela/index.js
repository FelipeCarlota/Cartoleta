function sayBela(args) {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/711659643520417804/2e6cca6aac96a7a3b81b613b8317e23b.webp?size=600';
  const perfil = 'https://discord.com/users/711659643520417804';

  const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Perigo: Mulher altamente maravilhosa')
  .setURL(perfil)
  .setAuthor({ name: 'Sula', iconURL: img, url: perfil })
  .setDescription('Essa sim, é pra casar!')
  .setThumbnail(img)
  .addFields(
    { name: 'Sobre a ela:', value: 'A pessoa mais silenciosa do server, com certeza!\n Espontânea e inclusiva, ela sabe como te fazer se sentir a pessoa mais bem recebida em qualquer ambiente que seja. Apesar de ser uma futura psicóloga, ela consegue deixar muita gente maluquinho (Talvez seja uma tática pra ter mais clientes, quem sabe?!)!\n Verdadeira, companheira, leal, legal, incrívelmente linda, amável, bondosa, compreensiva, determinada e objetiva, essa mulher é um sonho!\n Está sempre de bom humor e facilmente consegue alegrar o dia de qualquer pessoa.\n Apesar disso tudo, essa mulher incrível, merece ser enaltecida pelo ser humano maravilhos que ela é.\n\n "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis." Pv. 31:10' },
    { name: 'Mensagem:', value: 'O essencial é invisível aos olhos! 🌹✨♥️🔥', inline: false },
    { name: 'Amada Por', value: 'Todos', inline: true },
    { name: 'Psicologia', value: '👩🏼‍⚕️🧠', inline: true },
    { name: 'Arqui-inimigo', value: 'Samuerva', inline: true },
    )
    .setImage(img)
    .setTimestamp()
    .setFooter({ text: '"A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada". - Pv. 31:30', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayBela };