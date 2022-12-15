const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
const common: Array<number> = [];
for (let i = 0; i < 5; i++) {
    inputFile.forEach(line => {
        common.push(parseInt(line[i]))
    })
    console.log(common)
    common.length = 0;
}