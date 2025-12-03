import express from 'express'
const app = express()
const port = 3000

//middleware for the body data parse
app.use(express.json())
//table data er jonno
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('server is Running port 3000')
})

app.post("/", (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
