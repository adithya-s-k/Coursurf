const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.DATABASE, connectionParams);

  mongoose.connection.on('connected', () => {
    console.log('Connected to database sucessfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error while connecting to database :' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongodb connection disconnected');
  });
};

module.exports = dbConnect;
