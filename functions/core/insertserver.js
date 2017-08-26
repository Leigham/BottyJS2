const fssync = require('./fs_sync.js');

function insertServer(message){
    return new Promise((res,rej) => {
        fssync.readFileAsync('./servers/Templates/TemplateInfo.json').then(function (files){
            var json = JSON.parse(data);
            json.serverinfo["id"] = message.guild.id
            json.serverinfo.owners.push({"id":message.guild.ownerID});
            fssync.writeFile(global.serversPath+'/'+message.guild.id+'/serverinfo.json',JSON.stringify(json)).then(function(err){
            res('File Created'); 
            }). catch(function (err){
                rej('Coult not Create the file');
            });
        }).catch(function (err) {
            rej('Template Server Info File Could Not be found.');
        });
    });
};
module.exports = insertServer;