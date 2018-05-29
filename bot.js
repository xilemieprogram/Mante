const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setUsername('Mante')
    client.user.setPresence({ game: { name: 'mante', type: 0 } });
    console.log(`Mante is ready to explore a new world!`);
});

var prefix = '+';
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    if(message.content === `${prefix}Hello?`){
         message.channel.send("Hi!");
      }
});
client.login("NDUwNjMzMDc5NTkwMDkyODEw.De2U3A.vNfQYKF9JYMtcFtYhxUhDlHCWTo");
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    if(message.content === `${prefix}Goodbye!`){
         message.channel.send("Bye, bye!");
      }
});
client.login("NDUwNjMzMDc5NTkwMDkyODEw.De2U3A.vNfQYKF9JYMtcFtYhxUhDlHCWTo");
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    if(message.content === `${prefix}What are you doing?`){
         message.channel.send("I'm talking to you, friend)");
      }
});
client.login("NDUwNjMzMDc5NTkwMDkyODEw.De2U3A.vNfQYKF9JYMtcFtYhxUhDlHCWTo");
