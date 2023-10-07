import express from 'express';
import cors from 'cors'
import axios from 'axios'

const app = express()
const port = 3000

app.use(cors())

app.get('/getCat', (req, res) => {

    // make a call to cat api
    axios.get('https://cataas.com/cat?json=true')
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            console.log(error)
        })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})