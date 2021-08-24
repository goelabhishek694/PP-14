let fs=require('fs');
let path=require('path');
// let content=fs.readFileSync('f1.txt');
// console.log(content+"");

// fs.writeFileSync('abc.txt','timon n pumba');

// fs.appendFileSync('abc.txt','Hakunama tata');

// fs.unlinkSync('abc.txt');

// directories
//to make a folder
// fs.mkdirSync('pathModule');

//to delete a folder
// fs.rmdirSync('pathModule');

//to check if a file exists or not
// let doesExist=fs.existsSync('fs1.js');
// console.log('fs1.js file',doesExist);

//statusObj of file/folder
// let statusObj=fs.lstatSync('f1.txt');
// console.log(statusObj);
// 'C/Users/Program/Pepcoding/Js' -> to a folder
// 'C/Users/Program/Pepcoding/Js/array.js'-> to a file

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

// let fileArr=fs.readdirSync('/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/dir');
// console.log(fileArr);

// let srcPath='/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/fsModule/f1.txt';
// let destPath='/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/fsModule/f2.txt';
// let toBeCopiedFileName=path.basename(srcPath);
// let dest=path.join('/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/dir',toBeCopiedFileName);
// console.log(dest);
// fs.copyFileSync(srcPath,destPath);
// fs.copyFileSync(srcPath,dest); 



console.log(process.cwd());
console.log(__dirname);
console.log(__filename);
console.log(module);
'|__'
"└──"