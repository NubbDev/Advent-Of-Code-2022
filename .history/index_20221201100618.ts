const List: Array
const inputFile = await Deno.readTextFile("input.txt").then((data) => {
    return data.toString().split(`\n`)
});
console.log(inputFile);