const express = require('express')
const app = express()
const PORT = 3000
const PostRouter = require('./src/routes/posts.route')

app.use(express.urlencoded({extended:true}))

app.use('/v1/posts/', PostRouter.router)

app.get('/', (req, res) => {
    res.send({message:'Hello My New Master'})
})

app.listen(PORT, (error) => {
    if(error) process.exit(1)
    console.log('Server sudah jalan pada PORT http://localhost:3000')
})