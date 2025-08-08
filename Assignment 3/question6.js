const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

const open = Number (disneyData.open);
const high = Number (disneyData.high);
const low = Number (disneyData.low);
const close = Number (disneyData.close);
const volume = Number (disneyData.volume);

if (close > open) {
	if (volume>1000) {
		console.log ("Stong Bullish");
	} else {
	console.log ("bullish");
}

} else if (close < open) {
	if (volume> 1000) {
		console.log ("Strong Bearish");
} else {
	console.log("bearish");
}

} else if (close === open) {
	console.log("neutral");
}
