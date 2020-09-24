const { lstat } = require('fs')
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

// const topHeadlines  = ''
// const everything = ''
// const sources = ''

const fetch = require('node-fetch')
// const country = 'us'
let key = 'cf27e2bef2ed4e4db013a716d780a9a9'
let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`


fetch(url)
    .then((data) => data.json())
    .then((newData) => {
        newData = newData.articles
        newData.forEach(({ source, title, description, author }) => {
            const sourceName = source.name
            console.log(
                `
                From ${sourceName}
                ${title}

                ${description}

                By ${author}
                ------------------------------------------------------------------------------------------------------------------------

                `
            )

        })
        // console.log(newData)

    })

// // date intro

// var today = new Date().toDateString();

// console.log(
//     `
//     Today is ${today}.
//     Welcome to my news app.
//     What would you like to see?
//     Type "everything" to receive latest news.
//     Or you can search for specific news by typing a word: 
//     `
// )
// console.log(process.argv[2])