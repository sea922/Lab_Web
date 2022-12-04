let dotenv = require('dotenv');
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let routes = require('./routes')

dotenv.config()

let app = express();
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(bodyParser.json({limit: '50mb'}));


routes(app);
//1-8//


// app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, _ => console.log(`Server running on port: ${PORT}`));