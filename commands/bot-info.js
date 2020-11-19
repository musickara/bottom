const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "info",
    category: "moderation",
    description: "display bot info",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        
      let embed = new MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`STATS AND INFORMATION`)
    .setDescription(`hey , **${client.user.username}** here who wanna break the rules ?`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("ID", client.user.id, true)
    .addField("PRESENCE", client.user.presence.activities[0].name)
    .addField("UPTIME", client.uptime, true)
    .addField("STATUS", client.user.presence.status, true)
    .addField("TOTAL MEMBERS", client.users.cache.size)
 console.log(client.user.presence) 
    message.channel.send(embed)
    
    
      
      
      
      
      
      
      
      
    }
}