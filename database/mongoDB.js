const mongoose = require('mongoose');
const url = process.env.DATABASE_URL

console.log("Connecting to mongodb...")

mongoose
  .connect(url)
  .then(() => {
    console.log('MongoDB Connected Successfully');
  })  
  .catch((error) => {
  console.log('Error connecting to MongoDB:', error.message)
})