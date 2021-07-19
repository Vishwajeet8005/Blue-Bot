const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "poll",
        description: "polling",
        category: "Utility",
        usage: "[question]",
        
       
   
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('👍');
        await msg.react('👎');

        message.delete({ timeout: 1000 });
    }
}

