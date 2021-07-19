const Discord = module.require("discord.js");

module.exports = {
   name: "unhide",
   description: "Make Channel view able",
   category: "Managment",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("❎You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['VIEW_CHANNEL'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🙇‍♂️ ${message.channel} has been hide ✅`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}