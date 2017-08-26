const readAsync = require('./fs_sync.js');
const fssyncWrite = require('./fs_sync_write.js');

function getRanks(message){
  return new Promise((resolve, reject) => {
      var server = message.guild.id;
      var infofile = serversPath+'/'+server+'/serverinfo.json';
      readAsync.readFileAsync(serversPath+'/'+message.guild.id+'/serverinfo.json').then(function (config){
        var json = JSON.parse(config);
        if(json.serverinfo.ranks == undefined){
          json.serverinfo.ranks = [{'owner': [message.guild.ownerID]}];
          fssyncWrite.writeFile(serversPath+'/'+message.guild.id+'/serverinfo.json',JSON.stringify(json)).then(function(err){
            resolve(json.serverinfo.ranks);
          }).catch(function (err){
              reject(err);
          });
        }else{
          resolve(json.serverinfo.ranks);
        };
      }).catch(function (err) {
          reject(err);
      });
    });
};
module.exports.getRanks = getRanks;
