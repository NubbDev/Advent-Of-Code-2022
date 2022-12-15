const inputFile = await Deno.readTextFile("input.txt").then((data) => {
    return data.toString().split(`\n`).forEach((line) => {
        return parseInt(line);
    });
});
console.log(inputFile);
