const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "developer",
aliases: ["dev"],
category: "info",
usage: "=dev",
description: "Info of Developer",
run: async(client, message, args) => {
  
 await message.delete()
  
  let embed = new MessageEmbed()
.setTitle(` ${client.user.username} Bot`)
  .setDescription(`**Developer Name:-**\n**Support Server:-**[Click Here]("")\n**Dom#2807** Make's free discord bots for everyone just you want to order a bot and boom Done!!\nIf you want to join just type*developer Or invte*`)
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL())
.setFooter(` ${message.guild} `)
.setTimestamp()
  message.channel.send(embed)
}
}