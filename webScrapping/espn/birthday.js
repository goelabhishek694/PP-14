const cheerio=require('cheerio');
const request=require('request');
//npm i chalk
const chalk=require('chalk');

const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';

request(url,cb);
function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool=cheerio.load(html);
    let allTables=selectorTool('.table tbody');
    // console.log(allTables.length);
    for(let i=0;i<4;i++){
        let allRowsOfTable=selectorTool(allTables[i]).find('tr');
        // console.log(allRowsOfTable.length);
        for(let j=0;j<allRowsOfTable.length;j++){
            let link=selectorTool(allRowsOfTable[j]).find('a').attr('href');
            
            // console.log(link);
            if(link){
                let fullLink="https://www.espncricinfo.com"+link;
                // console.log(fullLink);
                getBirthday(fullLink);
            }
        }
    }
    // console.log(name);
}

function getBirthday(link){
    request(link,cb);
    function cb(err,res,html){
        if(err){
            console.log(err);
        }
        else{
            extractBirthdays(html);
        }
    }
}

function extractBirthdays(html){
    let selectorTool=cheerio.load(html);
    let playerDetailsArr=selectorTool('.player-card-description.gray-900');
    // console.log(playerDetailsArr.length);
    let playerName=selectorTool(playerDetailsArr[0]).text();
    let dobArr=selectorTool(playerDetailsArr[1]).text().split(',');
    // console.log(dobArr);
    let dob="";
    for(let k=0;k<2;k++){
        dob+=dobArr[k];
    }
    // console.log(dob);
    console.log(chalk.green("Name of Player: "+playerName));
    console.log(chalk.yellow("Date Of Birth: "+dob));
    console.log();
}