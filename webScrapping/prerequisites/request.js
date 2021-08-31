const request=require('request');
const cheerio=require('cheerio');
request('https://www.worldometers.info/coronavirus/', cb); // Print the HTML for the Google homepage.

function cb (error, response, html) {
    if(error){
    console.error('error:', error); // Print the error if one occurred
    }
    else {
        extractHTML(html);
    }
};

function extractHTML(html){
    let selectorTool=cheerio.load(html);
    let statsArr=selectorTool('.maincounter-number');
    // console.log(statsArr);
    // console.log(statsArr.length);
    for(let i=0;i<statsArr.length;i++){
        let data=selectorTool(statsArr[i]).text();
        console.log(data);
    }
}

//h.w. 

// chalk.js

// npm chalk-> 

