const express = require('express')

const app = express()

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.use(express.json())


app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))
app.use('/',require('./routes/index'))

app.listen(3000,()=>console.log('Server ready'))