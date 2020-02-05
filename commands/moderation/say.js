const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast", "falar"],
    category: "moderation",
    description: "você fala através do bot (versão Embed)",
    usage: "<input>",
    run: (client, message, args) => {
        // Check if you can delete the message
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Você não tem as permissões necessárias para usar este comando.").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Nada a dizer?").then(m => m.delete(5000));

    // Role color
    const roleColor = message.guild.me.highestRole.hexColor;

    // If the first argument is embed, send an embed,
    // otherwise, send a normal message
    if (args[0].toLowerCase() === "embed") {
        const embed = new RichEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(roleColor === "#000000" ? "#ffffff" :  roleColor)
            .setTimestamp()
            .setImage(client.user.displayAvatarURL)
            .setAuthor(message.author.username, message.author.displayAvatarURL);

        message.channel.send(embed);
    } else {
        message.channel.send(args.join(" "));
        }
    }
}