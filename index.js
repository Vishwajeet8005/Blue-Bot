const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const keepAlive = require("./server");
const config = require('./config.json')
const prefix = config.prefix
const token = process.env.TOKEN
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}help | Hey! I am Blue 🔵`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

const { addexp } = require("./handlers/xp.js")



client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
keepAlive();
client.login(process.env.TOKEN)
