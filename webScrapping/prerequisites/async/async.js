let fs=require('fs');
fs.readFile('f1.txt',monu);
console.log('before');

function monu(err,content){
    // if(err){
        console.log('error',err);
    // }
    // else 
    console.log(content+"");
}

console.log('after');
