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
