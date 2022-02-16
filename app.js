const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const AuthController = require('./controller/authController')
app.use('/api/auth', AuthController);

app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`)
})



