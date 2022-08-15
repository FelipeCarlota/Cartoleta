function sayFlorzinha(args) {
  const { EmbedBuilder } = require('discord.js');
  const img = 'https://cdn.discordapp.com/avatars/822143324403269642/85adac1e1b4773dae03153c845c267ac.webp?size=600';
  const perfil = 'https://discord.com/users/822143324403269642';

  const embed = new EmbedBuilder()
  .setColor(0x242746)
  .setTitle('🙈 RESPONDO EM 1 DIA ÚTIL 🔥')
  .setURL(perfil)
  .setAuthor({ name: 'Hinata', iconURL: img, url: perfil })
  .setDescription('Doze anos em flor! A linda menina ainda só pensa no amor.')
  .setThumbnail(img)
  .addFields(
    { name: 'Sobre a ela:', value: 'Como descrever essa mulher? Mil palavras não seriam suficientes para descrevê-la. No entanto, não tenho tantos bits assim pra armazenar tanta magnitude, inclusive, fico surpreso que tenha cabido numa variável tão pequena, um nome com o peso tão grande de pura coragem, determinação, amor, carinho, força e a graciosidade que é essa mulher.\n A Hinas é uma junção de muitas coisas, ao mesmo tempo que é meiga, pode ser dura, ao mesmo tempo que ama, odeia. E é exatamente essa confusão de sentimentos que a faz ser única.\n Florzinha a descreve muito bem. A personagem das meninas super poderosas, exercia a função de manter o equilíbrio entre as suas duas irmãs Lindinha e Docinho, para que elas trabalhassem juntas para resolver seus problemas.\nNossa Florzinha não é diferente. É um prazer poder descrever em tão pouco tempo, uma pessoa com qualidades pra serem descritas durante uma infinidade de tempo.' },
    { name: 'Mensagem:', value: 'Passageiro é só lá fora, dentro de nós é infinito. ♥️', inline: false },
    { name: 'Temperamento', value: '0 paciência, mas tenta aí...', inline: false },
    { name: 'Hobbie', value: 'Admirar sorrisos', inline: true },
    { name: 'Dentista', value: '👩🏼‍⚕️🦷', inline: true },
    )
    .setImage(img)
    .setTimestamp()
    .setFooter({ text: 'A amizade sem confiança é uma flor sem perfume.', iconURL: img });
    
    return { embeds: [embed] };
}

module.exports = { sayFlorzinha };