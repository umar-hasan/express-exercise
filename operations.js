const express = require('express')
const { mean, median, mode } = require('./helpers')
const app = express()

app.use(express.json())


app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        return res.status(400).send("You're supposed to put nums as a query parameter.")
    }
    let nums = (req.query.nums).split(",")
    try {
        let m = mean(nums)
        console.log(parseInt("foo"))
        return res.json({operation: "mean", mean: mean(nums)})
    } catch (error) {
        return res.status(400).send("Invalid query parameters.")
    }
    
})

app.get('/median', (req, res) => {
    if (!req.query.nums) {
        return res.status(400).send("You're supposed to put nums as a query parameter.")
    }
    let nums = (req.query.nums).split(",")
    try {
        let m = median(nums)
        return res.json({operation: "median", median: m})
    } catch (error) {
        return res.status(400).send("Invalid query parameters.")
    }
    
})

app.get('/mode', (req, res) => {
    if (!req.query.nums) {
        return res.status(400).send("You're supposed to put nums as a query parameter.")
    }
    let nums = (req.query.nums).split(",")
    try {
        let m = mode(nums)
        return res.json({operation: "mode", mode: mode(nums)})
    } catch (error) {
        return res.status(400).send("Invalid query parameters.")
    }
    
})

app.listen(3000, () => console.log(`listening on http://localhost:3000`));


