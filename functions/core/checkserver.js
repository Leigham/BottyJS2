const fssync = require('./fs_sync.js');
const insertServer = require('./insertServer.js');
const fs = require('fs');

function checkServerFolder(message){
    return new Promise( (res,rej) => {
        var infofile = (serversPath+'/'+message.guild.id+'/serverinfo.json');
        fssync.readFileAsync(infofile).then(function (files){
            res('Server Folder exists');
        }).catch(function (err) {
            fs.access(serversPath+'/'+message.guild.id, (err) => {
                if(err){
                    fs.mkdirSync(serversPath+'/'+message.guild.id);
                    insertServer(message)
                    .then(response => {
                      console.log('Server Inserted.');
                      res('file being created');
                    })
                    .catch(error => {
                        console.log(error)
                    });// this returns Unexpected identifier
                }else{
                    insertServer(message)
                    .then(response => {
                    console.log(response);
                    })
                    .catch(error => {
                        console.log(error)
                    });// this returns Unexpected identifier
                    rej('Stuff doesnt exist');
                };
            });
        });
    });
};

module.exports = checkServerFolder;
