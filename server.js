const express = require('express')
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 5000;

connectDB();

//@body-parser
app.use(express.json( { extended: false } ))

app.get('/', (req, res) => res.send('Hello World!'))

//@Define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/posts', require('./routes/posts'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/users', require('./routes/users'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))