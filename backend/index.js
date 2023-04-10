const connectToMongo = require('./db');
const express = require('express')
const cors = require("cors");
connectToMongo();
const app = express()
const port = 5000

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello person!')
// })
app.use(cors());
app.use('/', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Weaver backend app listening at http://localhost:${port}`)
})