function sayDocinho(args) {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/715710881081589771/71c96ba7aea89ee5297cf013ff08bcef.webp?size=600';
  const perfil = 'https://discord.com/users/715710881081589771';

  const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('O Pam mais docinho de todos!')
  .setURL(perfil)
  .setAuthor({ name: 'Pâmela', iconURL: img, url: perfil })
  .setDescription('Aquele Pamzin que todos os outros doces sentem inveja!')
  .setThumbnail(img)
  .addFields(
    { name: 'Sobre a ela:', value: 'Apesar da mulher silenciosa que ela é, isso se deve ao fato de ser muito tímida, quem tem sua amizade, tem um tesouro.\n Essa mulher sempre meiga e simpática, ganha conquista o carisma e o carinho por onde passa, a sra Simpatia em pessoa, sim, ela mesma.\n Apesar de todas as suas qualidades, ela se apega muito facilmente às pessoas, então, cuidado ela é um tesouro raro sensível a toques. Nesse coração não cabe todo mundo não, mas se você souber plantar nesse terreno, colherá as melhores produções de felicidade, companheirismo, carinho, afeto e cumplicidade.\n Esse tesouro, não se encontra em qualquer lugar, e vai por mim, você vai ficar esplêndido com ela ao seu lado, porque, mesmo se você não for muito provido de beleza, é sempre bom ter uma linda esteticista do lado. #pegaAVisão!' },
    { name: 'Mensagem:', value: 'Você, que poderia ser tanta coisa, preferiu ser saudade.', inline: false },
    { name: 'Miss', value: 'Docinho', inline: true },
    { name: 'Esteticista', value: '👩🏼‍⚕️🎨', inline: true },
    { name: 'Adora um', value: 'Bafafazinho', inline: true },
    )
    .setImage(img)
    .setTimestamp()
    .setFooter({ text: 'Vai um Pam docinho aí? 😋', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayDocinho };