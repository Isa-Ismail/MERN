const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000;

connectDB();

//@body-parser
app.use(express.json( { extended: false } ))

//@Define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/posts', require('./routes/posts'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/users', require('./routes/users'))

//serve static assets
if (process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'))
    
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
}

app.listen(port, () => console.log(`Example app listening on port ${port}`))