const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client( );
var prefix = "!"
bot.on('ready', () => {
  console.log("🔩 Bot by Takashi is running now ... 🔩");
});

bot.login("process.env.BOT_TOKEN")

bot.on('ready', () => {
    console.log("🔩 Bot by Takashi is running now ... 🔩");
});   
 

//hongkong  
  bot.on('message', async message =>{
    if(message.content.startsWith('!hongkong')){
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');
 
        var mpall = (" **Nouveau serveur à l'appuye: https://discord.gg/b6CeR32 https://media.discordapp.net/attachments/697567566729707593/697860214229303326/sexy_girl.gif")
        
        
        message.delete()
        message.guild.members.map(m => m.send(mpall))
    }
});
 
