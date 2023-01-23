const connectToMongo = require('./db.js')
const express = require('express')
var cors = require('cors')
connectToMongo()
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
// Available Routes
// app.use('/api/client, require('./routes/client))
app.use('/api/product', require('./routes/product'))
// app.use('/api/inspector, require('./routes/inspector))
// app.use('/api/consultant, require('./routes/consultant))
// app.use('/api/inspection, require('./routes/inspection))
// app.use('/api/admin, require('./routes/admin))
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.listen(port, () => {
console.log(`iNotebook backend listening at port http://localhost:${port}`)
})