const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#" // برفكس

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    var prefix = "#"
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);


  message.channel.send(`✅  ${user} banned from the server ! ✈    `)
}
});


client.on('message',  message =>{ //Toxic Codes
var moruad = 60000;//Toxic Codes
if (message.author.omar) return;//Toxic Codes
if (!message.content.startsWith(prefix)) return;//Toxic Codes
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));//Toxic Codes
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))//Toxic Codes
var command = message.content.split(" ")[0];//Toxic Codes
command = command.slice(prefix.length);//Toxic Codes
var args = message.content.split(" ").slice(1);//Toxic Codes
    if(command == "mute") {//Toxic Codes
   var tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));//Toxic Codes
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));//Toxic Codes
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    var muterole = message.guild.roles.find(`name`, "Muted");//Toxic Codes
    //start of create role
    if(!muterole){
      try{//Toxic Codes
        muterole =  message.guild.createRole({//Toxic Codes
          name: "Muted",
          color: "#070000",
          permissions:[]
        })//Toxic Codes
        message.guild.channels.forEach((channel, id) => {//Toxic Codes
          channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,//Toxic Codes
            ADD_REACTIONS: false
          });//Toxic Codes
        });//Toxic Codes
      }catch(e){
        console.log(e.stack);//Toxic Codes
      }
    }//Toxic Codes
    //end of create role//Toxic Codes
  var mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");//Toxic Codes
if(isNaN(mutetime)) return message.reply("** يرجي تحديد الوقت بـ الارقام فقط الارقام بلدقائق")//Toxic Codes
   (tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${mutetime}m`);//Toxic Codes
setTimeout(function(){//Toxic Codes
      tomute.removeRole(muterole.id);//Toxic Codes
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);//Toxic Codes
    }, mutetime*moruad);
 
//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes
//Toxic Codes
  }
if(command === `unmute`) {//Toxic Codes
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));//Toxic Codes
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))//Toxic Codes
 
 var toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);//Toxic Codes
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");//Toxic Codes
 
  var role = message.guild.roles.find (r => r.name === "Muted");//Toxic Codes
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")//Toxic Codes
 
  toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");//Toxic Codes
//Toxic Codes
  return;
 
  }//Toxic Codes
 
});//Toxic Codes

client.login(process.env.BOT_TOKEN);
