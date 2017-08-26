const readAsync = require('./fs_sync.js');
const fssyncWrite = require('./fs_sync_write.js');

function getCommands(message){
  return new Promise( (res,rej) => {
    var server = message.guild.id;
    var infofile = serversPath+'/'+server+'/serverinfo.json';
    readAsync.readFileAsync(serversPath+'/'+message.guild.id+'/serverinfo.json').then(function (config){
      var json = JSON.parse(config);
      if(json.serverinfo.commands == undefined){
        json.serverinfo.commands = {"ping" :{"description":"This command can be used to get the bots ping to the discord server","ranks":["owner"]}};
        //console.log(json.serverinfo.commands.ping.description);
        fssyncWrite.writeFile(serversPath+'/'+message.guild.id+'/serverinfo.json',JSON.stringify(json)).then(function(err){
          res(json.serverinfo.commands);
        }).catch(function (err){
            rej(err);
        });
      }else{
        res(json.serverinfo.commands);
      };
    }).catch(function (err) {
        rej(err);
    });
  });
};
module.exports.getCommands = getCommands;

//{"ping" :{"description":"descrption","ranks":["","",""],"function":""}}
