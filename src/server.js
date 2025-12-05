const express = require("express")
const loginRoute = require("../../config/routes/loginRoute")

const app = express();

app.use(express.json())

app.use('/api', loginRoute)
app.get('/home', (req,res)=>{
    res.json("hello")

})

app.listen(3000, ()=>{
    console.log('server is running in port 3000')
})