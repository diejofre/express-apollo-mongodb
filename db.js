const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    await connect('mongodb://localhost/taskdb');
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
