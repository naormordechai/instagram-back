const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const addBookRoutes = require('./routes/phone-routes');
const addUserRoutes = require('./routes/user-routes');

const app = express()
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.send('hello world')
})

// addParkingRoutes(app);
addUserRoutes(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))