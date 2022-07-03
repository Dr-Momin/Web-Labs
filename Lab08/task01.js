// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

const raceResults = ([first, second, third, ...rest]) => {
    return {
        first,
        second,
        third,
        rest
    }
}

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))

/*
{
first: "Tom",
second: "Margaret",
third: "Allison",
rest: ["David", "Pierre"]
}
*/
