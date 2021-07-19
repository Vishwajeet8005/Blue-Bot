
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "vote",
  aliases: ["upvote"],
  category: "Utility",
  description: "Vote link",
  usage: "Vote",
  run: async (client, message, args) => {
    
   

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Vote Bot")
    .setDescription("You can vote us in **discordbotlist**[⬆Click Here]()")
    .setImage(``)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
