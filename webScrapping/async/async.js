let fs=require('fs');
fs.readFile('f1.txt',cb);
console.log('before');

function cb(err,content){
    // if(err){
        console.log('error',err);
    // }
    // else 
    console.log(content+"");
}

console.log('after');
