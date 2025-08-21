const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let sumOfDisneyData = 0;

for (let day of disneyData){
	let closePrice = Number(day.close);
	sumOfDisneyData += closePrice;
}

let average = sumOfDisneyData / disneyData.length;

console.log("Average closing price of Disney is " + average.toFixed(2));