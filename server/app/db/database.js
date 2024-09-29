const mongoose = require("mongoose");

const dbConnection = async () => {
  const connection = await mongoose.connect(process.env.DATABASE_URI);
  console.log(`Database connected at ${connection.connections[0].host}`);
};

module.exports = dbConnection;
