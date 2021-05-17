const fetchData = require("../utils/fetchData")
const API = "https://rickandmortyapi.com/api/character/"

const getData = async (url_api) => {
    try {
        const response = await fetchData(url_api)
        const response_character = await fetchData(`${url_api}${response.results[0].id}`)
        const response_origin = await fetchData(response_character.origin.url)
        console.log(`Quantity of characters: ${response.info.count}`)
        console.log(`First character: ${response_character.name}`)
        console.log(`Dimension of the first character: ${response_origin.dimension}`)
    } catch (error) {
        console.log(error)
    }
}

getData(API)