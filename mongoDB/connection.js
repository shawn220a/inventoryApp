const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB Connected...');
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const dropCollection = async (collectionName) => {
  try {
    await mongoose.collection(collectionName).drop();
  } catch (err) {
    if (err.code === 26) {
      console.log('namespace %s not found', collectionName);
    } else {
      throw new Error(err);
    }
  }
};

module.exports = { connect, disconnect, dropCollection };
