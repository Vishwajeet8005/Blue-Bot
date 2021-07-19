const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "invite",
aliases: ["inv"],
category: "Utility",
usage: "=invite",
description: "Invite the bot to your server..",
run: async(client, message, args) => {
  
 await message.delete()
  
  let embed = new MessageEmbed()
.setTitle(` ${client.user.username} Bot`)
  .setDescription(`Hey Thanks for Inviting Blue and Don't forget to join support server\n**Invite** [Click Here]("")\n**Support Server**[Click Here]("")`)
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL())
.setFooter(` ${message.guild} `)
.setTimestamp()
  message.channel.send(embed)
}
}