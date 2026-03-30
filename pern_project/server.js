import express from 'express'
import { db } from "./db.js"

const app = express()

app.get('/home', (req, res) => {
    res.end("Backend")
})


app.listen(5000, () => {
    console.log("server running in http://localhost:5000/home")
})