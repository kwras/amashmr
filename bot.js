const Discord = require("discord.js");
const client = new Discord.Client();




  
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '501419525661786122') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '501420247392190465').send('You`re In  **Energy**  Welcome ..');
},3000);
});
  

client.login(process.env.BOT_TOKEN);
