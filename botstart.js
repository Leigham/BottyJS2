const Discord = require('discord.js');
const client = new Discord.Client();
const oneLine = require('common-tags').oneLine;
const fs = require('fs');
serversPath = "./servers";
//my functions
const checkServer = require('./functions/core/checkserver.js');
const insertServer = require('./functions/core/insertServer.js');
const getPrefix = require('./functions/core/getPrefix.js');
const getRanks = require('./functions/core/getRanks.js');
const getCommands = require('./functions/core/getCommands.js');
var path = require('path');
global.appRoot = __dirname;


client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'Serving '+client.guilds.size+' Servers', type: 1 , url:'https://www.twitch.tv/its_leigham'} });
});



client.on('message', async message => {
  if(message.author.equals(client.user))return;// if the message is from the bot, ignore it.
    //Checking if the server has a folder/config file, if not creating it.
    await checkServer(message)
    .then(response => console.log(response))//this is working.
    .catch(error => {
      console.log(error)//This is not.
    });

    //Checking for the prefix.
    await getPrefix.getPrefix(message)
    .then(response => prefix = response);
    //mention the bot, to get the prefix for the server.
    if(message.content == '<@348583410312151040>'){
      message.channel.send('Use the Prefix '+prefix+' in this server');
      console.log('test');
    };
    await getRanks.getRanks(message)
    .then(result => console.log(result));
    await getCommands.getCommands(message)
    .then(result => console.log(result));
});

client.login('');
