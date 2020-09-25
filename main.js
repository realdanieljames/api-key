// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api


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
            newData.forEach(({ source, title, description, author }) => {
                const sourceName = source.name
                const outputFormat =
        `   
From ${sourceName}
${title}

${description}

By ${author}
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

