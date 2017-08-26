const fssyncRead = require('./fs_sync.js');
const fssyncWrite = require('./fs_sync_write.js');

async function insertServer(message){
    return new Promise((res,rej) => {
        console.log(serversPath+'/Templates/TemplateInfo.json');
        fssyncRead.readFileAsync(serversPath+'/Templates/TemplateInfo.json').then(function (files){
            var json = JSON.parse(files);
            console.log(json);
            json.serverinfo["id"] = message.guild.id
            json.serverinfo.owners.push({"id":message.guild.ownerID});
            fssyncWrite.writeFile(serversPath+'/'+message.guild.id+'/serverinfo.json',JSON.stringify(json)).then(function(err){
            res('File Created');
            }).catch(function (err){
                rej(err);
            });
        }).catch(function (err) {
            rej(err);
        });
    });
};
module.exports = insertServer;
