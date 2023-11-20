import axios from 'axios'

export const fetchStockPriceAPI=(stockName)=>{
    return axios.get(`http://localhost:4000/stock-price/${stockName}`)
            .then((res)=>{
                return res.data
            })
            .catch((error)=>{
                console.error("API error:",error)
                throw error
            })
}