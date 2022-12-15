const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
for (let i = 0; i < inputFile.length; i++) {
    inputFile.forEach(line => {
        console.log(line[i]);
    })
}