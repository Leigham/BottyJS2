const fssync = require('./fs_sync.js');
const fs = require('fs');

function checkServerFolder(message){
    return new Promise( (res,rej) => {
        var infofile = (global.serversPath+'/'+message.guild.id+'/serverinfo.json');
        fssync.readFileAsync(infofile).then(function (files){
            res('Server Folder exists');
        }).catch(function (err) {
            rej('Server folder does not exist');
        });
    });
};

module.exports = checkServerFolder;