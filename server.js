const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    "Bot By Dot",
    "|Cod By Dot|",
    "|Reklam Bo mn Bner|",
    "Tosha reklam mak bka"
  ];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});



client.on("message", vex => { 
if(vex.content.includes("discord.gg")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("Wait 1 minute before getting typing this again. - ");
    } else {

if(vex.channel.type === "dm"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("https://discord.gg/9sebTXTRFR")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("989261716598689942")//id bashe reklam
dot.send(`
ناردرا لە لایەن
<@${vex.author.id}> ` +`
سێرڤەرەکە
${s2}
          `)
  }

}}
  talkedRecently.add(vex.author.id);
        setTimeout(() => {
          talkedRecently.delete(vex.author.id);
        }, 60000);
  
  
}) 

client.on("message", msg => {
  if (msg.content === "Hi") {
    msg.reply("بە خیر بیت چاوە جوان چۆن خزمە تە ت بکە م");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("بە خیر بیت چاوە جوان چۆن خزمە تە ت بکە م");
  }
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("سلاو له تۆشه چاو جوان");
  }
});

client.on("message", msg => {
  if (msg.content === "Slaw") {
    msg.reply("سلاو له تۆشه چاو جوان");
  }
});

client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply("لە تایبەتە بۆم بنیر");
  }
});

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply("**لە تایبەتە بۆم بنیر");
  }
});

const channelid = "989261728112062534"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("Token Bot")
