const readAsync = require('./fs_sync.js');

function getPrefix(message){
     return new Promise( (resolve, reject) => {
       readAsync.readFileAsync(serversPath+'/'+message.guild.id+'/serverinfo.json').then(function (imgBuffer){
           var json = JSON.parse(imgBuffer);
           var prefix = json.serverinfo.prefix;
           if(prefix == undefined){
             resolve("~")
           }else{
             resolve(prefix)
           };
        }).catch(function (err) {
            resolve('~')
        });
     });
};
module.exports.getPrefix = getPrefix;
