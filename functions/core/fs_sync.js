var fs = require('fs');

function readFileAsync(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, data){
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
};
module.exports.readFileAsync = readFileAsync;

function writeFile(filename,fileContents) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename,content, function(err){
            if (err){
                reject('We Couldnt Create the File ?');
            }else{
                resolve('File Created');
            };
        });
    });
};
module.exports.writeFile = writeFile;

