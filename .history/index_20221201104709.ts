const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
const common: Array<Array<number>> = [];
for (let i = 0; i < 5; i++) {
    const temp: Array<number> = []
    inputFile.forEach(line => {
        temp.push(parseInt(line[i]))
    })
    common.push(temp)
}
console.log(common)