let fs=require('fs');
let path=require('path');
let inputArr=process.argv.slice(2);
console.log("inputArr is ",inputArr);
let inputDir=inputArr[0];
// fs.lstatSync
let allEntities=fs.readdirSync(inputDir);
console.log("all entities are ",allEntities);
let content="";
for(let i=0;i<allEntities.length;i++){
    let entityName=allEntities[i];
    // console.log(entityName);
    let eName=path.join(inputDir,entityName);
    let statusObj=fs.lstatSync(eName);
    // console.log(stats);
    let isFile=statusObj.isFile();
    if(isFile){
        let extName=path.extname(eName);
        if(extName=='.txt'){
            content+=fs.readFileSync(eName);
        }
    }
}
// console.log(content);
// let summaryFile=path.join(process.cwd(),'summary.txt');
let summaryFile='/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/summary.txt'
fs.writeFileSync(summaryFile,content);

