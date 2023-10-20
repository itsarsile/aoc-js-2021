import { warn } from 'console';
import * as fs from 'fs'

const input: string[] = fs.readFileSync('input', 'utf-8').trim().split('\n')

let horizontal = 0;
let depth = 0;
let total = 0;
let aim = 0;

for (const item of input) {
	let commands = item.split(' ');
	switch (commands[0]) {
		case 'forward':
			depth = aim * parseInt(commands[1], 10) + depth
			horizontal += parseInt(commands[1], 10)
			console.log(`forward - ${commands[1]} |`, 'forward - depth: ', depth)
			break;
		case 'down':
			aim += parseInt(commands[1], 10)
			console.log(`down - ${commands[1]} |`, 'down - aim:', aim)
			break;
		case 'up':
			aim -= parseInt(commands[1], 10)
			console.log(`up - ${commands[1]} |`, 'up - aim:', aim)
			break;
	}
}
console.log("---------------");

console.log('horizontal', horizontal)
console.log('aim', aim)
total = horizontal * depth
console.log('depth', depth)
console.log('horizontal * depth', total)
