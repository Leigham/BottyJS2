
var fs = require('fs');

function writeFile(filename,fileContents) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename,fileContents, function(err){
            if (err){
                reject(err);
            }else{
                resolve('File Created');
            };
        });
    });
};
module.exports.writeFile = writeFile;
