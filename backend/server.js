require('dotenv').config();
const express = require('express');
const dbConnect = require('./dbConnect');
const coursesRoute = require('./routes/courses');
const cors = require('cors');
const app = express();

dbConnect();

app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:8080', 'https://coursurf-api.onrender.com'],
  })
);

app.use('/api', coursesRoute);

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
