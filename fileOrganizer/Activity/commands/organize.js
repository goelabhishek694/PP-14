let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcPath){
    
    let entities=fs.readdirSync(srcPath);
    let organizeFolder=path.join(srcPath,'organizedFiles');
    // console.log(organizeFolder);
    if(!fs.existsSync(organizeFolder)){
        fs.mkdirSync(organizeFolder);
    }

    for(let i=0;i<entities.length;i++){
        
        let file=entities[i];
        if(fs.lstatSync(file).isFile()){
        // console.log(file);
            let type=checkType(file);
            let typeFolder=path.join(organizeFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder)
            }

            let src=path.join(srcPath,entities[i]);
            let dest=path.join(typeFolder,entities[i]);
            fs.copyFileSync(src,dest);
    }
        
        // console.log(typeFolder)

    }
}

function checkType(file){
    for(let type in types){
        for(let ext of types[type]){
            if(path.extname(file).split('.')[1]==ext){
                return type;
            }
        }
    }
    return 'others';
}


module.exports={
    organizeFn:organizeFn
}
