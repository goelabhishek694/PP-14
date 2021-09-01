const cheerio=require('cheerio');
const request=require('request');

const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

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
    let commentaryArr=selectorTool('.match-comment-wrapper .match-comment-long-text');
    let lbc=selectorTool(commentaryArr[0]).text();
    console.log(lbc);
}