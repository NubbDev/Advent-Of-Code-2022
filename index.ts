<<<<<<< Updated upstream
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
=======
const inputFile = await Deno.readTextFile("input.txt").then(file => {
    return file.split('\n');
});
const inputNumb: Array<number> = [];
const inputNumb2: Array<number> = [];
const input: Array<Array<Array<string>>>= [];

const ruleSet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];



const repeatedCharacter = (str:string):string => {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return str[i];
        }
      }
    }
    return '';
};

inputFile.forEach(line => {
    let temp: Array<string> = [];
    const mid = Math.floor(line.length / 2);
    temp.push(line.slice(0, mid), line.slice(mid, line.length));
    input.push([temp[0].split(''), temp[1].split('')]);
})

//task 1
input.forEach((stringArray) => {
    const tempArray: string[] = [];
    stringArray[0].forEach((char:string) => {
        stringArray[1].forEach((char2:string) => {
            if (char === char2) {
                if (tempArray.includes(char)) {
                    return
                }
                tempArray.push(char);
            }
        })
    }) 
    inputNumb.push(ruleSet.indexOf(tempArray[0]) + 1);
})


//task 2
const tempArray: Array<Array<Array<string>>> = [];
for (let i = 0; i < inputFile.length; i+=3) {
    const temp = inputFile.slice(i, i + 3)
    tempArray.push([temp[0].split(''), temp[1].split(''), temp[2].split('')])
}

tempArray.forEach(stringArray => {
    const tempArray: string[] = [];
    stringArray[0].forEach((char:string) => {
        stringArray[1].forEach((char2:string) => {
            stringArray[2].forEach((char3:string) => {
                if (char === char2 && char2 === char3) {
                    if (tempArray.includes(char)) {
                        return
                    }
                    tempArray.push(char);
                }
            })
        })
    }) 
    inputNumb2.push(ruleSet.indexOf(tempArray[0]) + 1);
})

console.log(inputNumb2.reduce((a, b) => a + b, 0))
>>>>>>> Stashed changes
