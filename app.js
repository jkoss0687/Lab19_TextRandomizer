var inspirational = require('./words')

function randomQuotes(inspirational){
	return inspirational[Math.floor(Math.random()*inspirational.length)];		
}

console.log(randomQuotes(inspirational));