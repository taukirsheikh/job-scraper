import axios from 'axios'



export default async function FromMeroJob() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/records/')
        // console.table(response.data)
        
        return response
    } catch (err) {
        console.error(err)
        throw err;
    }
}
export  async function FromCotiviti() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/cotiviti/')
        // console.table(response.data)
        
        return response
    } catch (err) {
        console.error(err)
        throw err;
    }
}
