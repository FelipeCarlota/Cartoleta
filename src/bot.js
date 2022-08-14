require("dotenv").config();
const { token } = require('./commands/tools/config.json');
const { channel } = require("diagnostics_channel");
const { Client, Collection, GatewayIntentBits,  } = require("discord.js");
const fs = require("fs");
const { saySomething } = require("./commands/saySomething");

const client = new Client({ 
  intents: 
    [
      GatewayIntentBits.Guilds ,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates,      
    ]
});

client.on("messageCreate", message => {
  if (message.author.bot || !message.guild) return;

  const prefix = '$';
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  if(!message.content.toLowerCase().startsWith(prefix)) return;
  
  if(message.content.toLowerCase().startsWith(prefix)){
    const anwser = saySomething(args);
    message.reply(anwser);
  }
});
client.login(token);