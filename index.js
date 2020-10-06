const discord = require("discord.js");
const bot = new discord.Client();

const config = require("./config.json");
 
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
});

bot.on("message", async message => {
let prefix = config.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd == `${prefix}hi`){
    message.channel.send("Hi!");
}
});
bot.login(config.token);