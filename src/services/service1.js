import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const getPage = async (page) => {
    const url=`${baseUrl}?offset=${page*50}&limit=50`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default {
    getPage
}