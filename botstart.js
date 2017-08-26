const Discord = require('discord.js');
const client = new Discord.Client();
const oneLine = require('common-tags').oneLine;
const fs = require('fs');
serversPath = "./servers";
//my functions
const checkServer = require('./functions/core/checkserver.js');
const insertServer = require('./functions/core/insertServer.js');
const fssync = require('./fs_sync.js');



client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', async message => {
    await checkServer(message)
    .then(response => console.log(response))//this is working.
    .catch(error => {
      await insertServer(message)// this returns Unexpected identifier
      .then(response => console.log(respone))
      .catch(error => console.log(error));
    });
});

client.login('');
