const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
const common: Array<number> = [];
for (let i = 0; i < 5; i++) {
    const temp = []
    inputFile.forEach(line => {
        temp.push(parseInt(line[i]))
    })
    common.push(temp.reduce((a, b) => a + b, 0))
    common.length = 0;
}