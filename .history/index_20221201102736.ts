const List: Array<number> = []
const inputFile = await Deno.readTextFile("input.txt").then((data) => {
    data.toString().split(`\n`).forEach(
        line => {
            List.push(parseInt(line))
        }
    )
});
console.log(inputFile);