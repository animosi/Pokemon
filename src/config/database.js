const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/pokemon';

const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    return console.log(`Successfully connected to ${db}`);
  } catch (err) {
    console.log('Error connecting to database: ', err);
    return process.exit(1);
  }
};

mongoose.connection.on('disconnected', connect);

module.exports = connect();
