/******************************************************************************************************************
 *                        // USE ANY ONE OF THESE API'S THAT NEEDS AN API KEY TO GET DATA.                        *
 *                     // READ THE DOCS TO SEE HOW TO CALL FOR AND GET THE DATA THAT YOU WANT                     *
 *       // OR YOU CAN USE ONE OF YOUR CHOOSING IF YOU ARE COMFORTABLE, HOWEVER IT MUST REQUIRE AN API KEY        *
 * // PARSE THE DATA, AND LOG ANY IMPORTANT INFORMATION YOU WOULD LIKE TO SHOW IN A NICE FORMAT OF YOUR CHOOSING. *
 *                        // YOU CAN ADD YOUR OWN SPIN TO THE DATA IN HOW YOU PRESENT IT.                         *
 *                     // USE ANY TOOLS WE'VE PRACTICED SUCH AS PROMISES, DESTRUCTURING, ETC.                     *
 *                             // ONCE EVERYTHING WORKS, UPLOAD THE FILE AND SUBMIT.                              *
 ******************************************************************************************************************/

/******************************************************************************************
 *                      // // APIs to CHOOSE FROM:
 *         // // WEATHER API- HTTPS://OPENWEATHERMAP.ORG/API                    *
 *         // // WEATHER/AIR QUALITY API-  HTTPS://WWW.AIRVISUAL.COM/DASHBOARD/API         *
 *         // // RECIPE API- HTTPS://DEVELOPER.EDAMAM.COM/ (USES TWO KEY CODE)           *
 *         // // SUPERHEROES API- HTTPS://SUPERHEROAPI.COM/INDEX.HTML               *
 *         // // MOVIES API- HTTPS://WWW.OMDBAPI.COM/                       *
 *         // // SPORTS API - HTTPS://WWW.THESPORTSDB.COM/API/V1/JSON/1/SEARCHTEAMS.PHP?T=ARSENAL *
 *         // // NEWS API - HTTPS://NEWSAPI.ORG/                          *
 *         // // HARVARD ART MUSEUM API - HTTPS://WWW.HARVARDARTMUSEUMS.ORG/COLLECTIONS/API    *
 ******************************************************************************************/

// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.


// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.




// this app outputs the date and then asks you what news you would like to see. 
// then it oputputs formatted articles that you can click on and read. 

//News API has 2 main endpoints and 1 minor endpoint
//topHeadlines parameters       https://newsapi.org/docs/endpoints/top-headlines
// country, category, sources, q, pageSize, page, apiKey

// everything parameters    https://newsapi.org/docs/endpoints/everything
//  q, qlnTitle, sources, domains, excludeDomains, from, to language, sortBY,
//pageSize, page, apiKey

//sources parameters        https://newsapi.org/docs/endpoints/sources
//category, language, country, apiKey


const fetch = require('node-fetch')
const key = require('./key')

// // // date intro
const today = new Date().toDateString();

// readline to listen for user's input after running app
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const welcomeMessage = `
Today is ${today}.
Welcome to the NEWS APP.
What would you like to see?
Type "everything" to receive latest news.
Or you can search for specific news by typing a word: 
`





const newsInfo = (searchTerm) => {
    if (searchTerm === 'everything' && searchTerm === undefined) {
        url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
    }
    url = `http://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${key}`
    fetch(url)
        .then((data) => data.json())
        .then((newData) => {
            newData = newData.articles
            newData.forEach(({ source, title, description, author, url }) => {
                const sourceName = source.name
                const outputFormat =
        `   
========================================================================
========================================================================
------------------------------
FROM:
${sourceName}
------------------------------
TITLE:
${title}
------------------------------

DESCRIPTION:
${description}
-------------------------------

BY AUTHOR:
${author}
-----------------------------------

LINK TO NEWS =>:
${url}
========================================================================
========================================================================
`
                console.log(outputFormat)

            })

        })
        .catch((err) => {
            console.log(`*** PLEASE RUN  NODE MAIN.JS  AGAIN AND TYPE IN A SEARCH TERM ***`)
        })
    interface.close();
}




interface.question(
    welcomeMessage, newsInfo
)

