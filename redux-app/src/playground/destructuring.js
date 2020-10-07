const person = {
    name: "Andrew",
    age: 26,
    location: {
        city: "Philadelphia",
        temp: 92
    }
}

const {name = "Anonymous", age} = person
console.log(`${name} is ${age}`)

const {city, temp} = person.location
console.log(`Its ${temp} in ${city}`)




const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"]
const [street, city, state = "New York", zip] = address
console.log("You are in ${city} ${state}.")