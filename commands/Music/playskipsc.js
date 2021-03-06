const Discord = require(`discord.js`);
const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
const playermanager = require(`../../handlers/playermanager`);
module.exports = {
  name: `playskipsc`,
  category: `🎶 Music`,
  aliases: [`pssc`, `playskipsoundcloud`],
  description: `Plays a song instantly from soundcloud, which means skips current track and plays next song`,
  usage: `playskipsc <Song / URL>`,
  parameters: {"type":"music", "activeplayer": false, "previoussong": false},
  run: async (client, message, args, cmduser, text, prefix, player) => {
    try{
      //if no args return error
      if (!args[0])
        return message.channel.send(new MessageEmbed()
          .setColor("RED")
          .setFooter(client.user.username + " | by: milrato.eu", client.user.displayAvatarURL())
          .setTitle(`${emoji.msg.ERROR} Error | You need to give me a URL or a Search term.`)
        );
      message.channel.send(new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`**Searching** 🔎 & **Skipping** ${emoji.msg.skip_track}`)
        .setDescription(`\`\`\`${text}\`\`\``)
        ).then(msg=>{
          msg.delete({timeout: 5000}).catch(e=>console.log("Could not delete, this prevents a bug"))
        })
      //play the SONG from YOUTUBE
      playermanager(client, message, args, `skiptrack:soundcloud`);
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor("RED")
        .setFooter(client.user.username + " | by: milrato.eu", client.user.displayAvatarURL())
        .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``)
      );
    }
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
