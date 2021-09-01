const cheerio = require("cheerio");
const request = require("request");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(url, cb);
function cb(err, res, html) {
  if (err) {
    console.log(err);
  } else {
    extractHtml(html);
  }
}

function extractHtml(html) {
  let selectorTool = cheerio.load(html);
  let bowlerTableArr = selectorTool(
    ".card.content-block.match-scorecard-table .table.bowler"
  );

  // console.log(bowlerTableArr.length);
  let hwtPlayer = "";
  let now = 0;
  for (let i = 0; i < bowlerTableArr.length; i++) {
    let bowlerTable = selectorTool(bowlerTableArr[i]);
    let allBowlersRow = selectorTool(bowlerTable).find("tbody>tr");
    // console.log(allBowlersRow.length);
    // console.log(bowlerTable);

    for (let j = 0; j < allBowlersRow.length; j++) {
      //td-> column
      let columnsOfEachBowlerRow = selectorTool(allBowlersRow[j]).find("td");
      // console.log(columnsOfEachBowlerRow.length);
      let playerName = selectorTool(columnsOfEachBowlerRow[0]).text();
      let currNumOfWickets = selectorTool(columnsOfEachBowlerRow[4]).text();
      if (columnsOfEachBowlerRow.length == 1) continue;
      // console.log(playerName);
      // console.log(currNumOfWickets);

      if (currNumOfWickets > now) {
        now = currNumOfWickets; //3
        hwtPlayer = playerName; // trent boult
      }
    }
  }

  console.log("Highest Wicket Taking Player is :" + hwtPlayer);
  console.log("Number Of Wickets :" + now);
}
