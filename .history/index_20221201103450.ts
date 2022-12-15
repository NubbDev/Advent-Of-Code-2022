const inputFile = await Deno.readTextFile("input.txt").then((data) => {return data.toString().split(`\n`)});
inputFile.forEach(line => {
    console.log(line[0]);
})