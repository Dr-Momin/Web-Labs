const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]: function () {
            return noise;
        }
    }
}



const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark() //"Woooof!"

console.log(d.bark())


const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

console.log(s.bleet())

