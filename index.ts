const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
const elf: Array<number> = [];
const me: Array<number> = [];

const win = 6;
const tie = 3;
const lose = 0;

/*
    1 is for Rock
    2 is for Paper
    3 is for Scissors

    1 means I lose
    2 means I tie
    3 means I win
*/

const convert = (input: string):number => {
    if (input === "X" || input === "A") {
        return 1;
    } else if (input === "Y" || input === "B") {
        return 2;
    } else if (input === "Z" || input === "C") {
        return 3;
    }
    return 0;
}
inputFile.forEach((line) => {
    me.push(convert(line[2]) as number);
    elf.push(convert(line[0]) as number)
});
const checkMyPoints = (myMove: Array<number>, elfMove: Array<number>): number => {
    const myPoints: Array<number> = [];
    for (const i in elfMove) {
    

        if (elfMove[i] === myMove[i]){
            myPoints.push(myMove[i] + tie);
        } else if (elfMove[i] == 1 && myMove[i] == 2) {
            myPoints.push(myMove[i] + win);
        }
        else if (elfMove[i] === 2 && myMove[i] === 3) {
            myPoints.push(myMove[i] + win);
        }
        else if (elfMove[i] === 3 && myMove[i] === 1) {
            myPoints.push(myMove[i] + win);
        }
    
        else if (elfMove[i] === 2 && myMove[i] === 1) {
            myPoints.push(myMove[i] + lose);
        }
        else if (elfMove[i] === 3 && myMove[i] === 2) {
            myPoints.push(myMove[i] + lose);
        }
        else if (elfMove[i] === 1 && myMove[i] === 3) {
            myPoints.push(myMove[i] + lose);
        }
    }
    return myPoints.reduce((a, b) => a + b, 0);
} // Part 1 Problem

const checkPoints = (myMove: Array<number>, elfMove: Array<number>): number => {
    const myPoints: Array<number> = [];
    let pos = 0;
    for (const i in myMove) {
        if (myMove[i] === 1) {
            if (elfMove[i] === 1) {
                pos = 3;
            } else if (elfMove[i] === 2) {
                pos = 1;
            } else if (elfMove[i] === 3) {
                pos = 2;
            }
            myPoints.push(pos + lose);
        }
        else if (myMove[i] === 2) {
            pos = elfMove[i]
            myPoints.push(pos + tie);
        }
        else if (myMove[i] === 3) {
            if (elfMove[i] === 1) {
                pos = 2;
            } else if (elfMove[i] === 2) {
                pos = 3;
            } else if (elfMove[i] === 3) {
                pos = 1;
            }
            myPoints.push(pos + win);
        }
    }
    return myPoints.reduce((a, b) => a + b, 0);
}; // Part 2 Problem

console.log(checkMyPoints(me, elf));
console.log(checkPoints(me, elf));