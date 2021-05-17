const fetchData = require("../utils/fetchData")
const API = "https://rickandmortyapi.com/api/character/"

fetchData(API)
    .then(data => {
        console.log(`Quantity of characters: ${data.info.count}`)
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(`First character: ${data.name}`)
        return fetchData(data.origin.url)
    })
    .then(data => console.log(`Dimension of the first character: ${data.dimension}`))
    .catch(error => console.log(error))