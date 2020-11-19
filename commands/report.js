const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();

        // Either a mention or ID
        let rMember = message.mentions.members.first() || null
        // No person found
        if (!rMember)
            return message.reply("Couldn't find that person?")
          
        // The member has BAN_MEMBERS or is a bot
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.reply("Can't report that member, maybe that member is god")

        // If there's no argument
        if (!args[1])
            return message.channel.send("Please provide a reason for the report")
        
        const rchannel = message.guild.channels.cache.find(
        (ch) => ch.name === "❗report-issue")
            
        // No channel found
        if (!rchannel)
            return message.channel.send("Couldn't find a `❗report-issue` channel")
        const embed = new MessageEmbed()
            .setColor("YELLOW")
              .setThumbnail(rMember.user.displayAvatarURL())
            .setTimestamp()
            .setAuthor("Reported member")
            .setDescription(`hey ${message.member} is reported ${rMember}`)
            .addField("Impostor:",`${rMember}`, true)
            .addField("Member ID:",`${rMember.user.id}`, true)
            .addField("Reported by:", `${message.member}`, true)
            .addField("Reported in:", `${message.channel}`, true)
            .addField("Reason:", `${args.slice(1).join(" ")}`, true)

          rchannel.send(embed)
      
      const embed1 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("YELLOW")
        .setAuthor("REPORT TICKET")
        .setDescription(`We have received your report. we are currently investigating your report against ${rMember}. Remember to stay on the right path`)
      
      return message.channel.send(embed1)
    }
}