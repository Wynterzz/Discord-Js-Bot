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

  if (cmd == `${prefix}botinfo`) {
    let infoembed = new discord.MessageEmbed()
      .setColor("#15f152")
      .addField("Username:", bot.user.username)
      .addField("Bot ID:", bot.user.id)
      .addField("Joined On:", bot.user.createdAt);
    return message.channel.send(infoembed);

  };
  if (cmd == `${prefix}userinfo`) {
    let uiembed = new discord.MessageEmbed()
      .setColor("#15f152")
      .addField("Username", message.author.username)
      .addField("ID:", message.author.id)
      .addField("Created At:", message.author.createdAt);
    return message.channel.send(uiembed);
  };
});
bot.login(config.token);
