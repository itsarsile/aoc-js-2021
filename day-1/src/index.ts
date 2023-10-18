import * as fs from 'fs'

const input: string = fs.readFileSync('input.txt', 'utf8')

// Function to check an input
function checkInputHighLow(input: string) {
	// Convert the string into set and array
	let count = 0;
	const nums = input.split(/\r?\n(?!$)/).map((num) => Number(num))

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		if (i === 0) {
			console.log(`element: ${element} \x1b[34mN/A\x1b[0m`)
		} else if (element > nums[i - 1]) {
			console.log(`element: ${element} \x1b[32mincreased\x1b[0m`)
			count++
		} else {
			console.log(`element: ${element} \x1b[31mdecreased\x1b[0m`)
		}
	}
	console.log(`Total increased from the beginning \x1b[48;5;14m${count}\x1b[0m`)

}

checkInputHighLow(input)
