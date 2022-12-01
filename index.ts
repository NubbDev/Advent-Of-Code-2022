import * as fs from 'fs'

const input = fs.readFileSync('input.txt').toString().split('\n')
const inputArray: Array<Array<number>> = []
const finalArray: Array<number> = []
let sol:number = 0

let temp1: Array<number> = []
let temp2: number
input.forEach((string:string) => {
    if (string !== '') {
        temp1.push(parseInt(string))
        return;
    }
    inputArray.push(temp1)
    temp1 = []
})
inputArray.forEach(cal => {
    temp2 = cal.reduce((partialSum, a) => partialSum + a, 0)
    finalArray.push(temp2)
})

finalArray.sort((a, b) => b - a).slice(0, 3).forEach((num: number) => {
    sol += num
})

console.log(sol)