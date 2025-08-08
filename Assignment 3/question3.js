const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

const openNum = Number (disneyData.open);
const highNum = Number (disneyData.high);
const lowNum = Number (disneyData.low);
const closeNum = Number (disneyData.close);

let result = openNum - highNum +lowNum - closeNum;

result = result.toFixed(2);

console.log (result);