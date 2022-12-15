const inputFile = await Deno.readTextFile("input.txt").then(file => {
    return file.split('\n');
});
const inputNumb: Array<number> = [];
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
input.forEach(stringArray => {
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
const tempArray: any[] = [];
inputFile.forEach((stringArray, index) => {
    inputFile.slice(0, 3)
    tempArray.push(inputFile.slice(0, 3))
})
