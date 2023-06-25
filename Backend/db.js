

const mongoose = require("mongoose");
// const mongoURL = 'mongodb+srv://adityasuman990:Adityasuman990@wefood1.uderbhl.mongodb.net/fooddb?retryWrites=true&w=majority';
const mongoURL = 'mongodb+srv://adityasuman990:Adityasuman990@cluster0.vcrlhbc.mongodb.net/fooddb?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    });
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("menucollection");
    fetched_data.find({}).toArray(function(err, data){
      if(err) console.log(err);
      else console.log(data);
    })
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;







// // db.js

// const mongoose = require('mongoose');
// const uri = 'mongodb+srv://adityasuman990:Adityasuman990@wefood1.uderbhl.mongodb.net/fooddb?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB database.');
//   const fetched_data= mongoose.connection.db.collection("menucollection");
//   fetched_data.find({}).toArray(function(err, data){
//     if(err) console.log(err)
//     else console.log(data)
//     })
// });

// module.exports = db;


// const { MongoClient } = require('mongodb');

// Connection URI
// const uri = 'mongodb+srv://adityasuman990:Adityasuman990@wefood1.uderbhl.mongodb.net/fooddb?retryWrites=true&w=majority';

// Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to fetch data from the database
// async function fetchData() {
  // try {
    // Connect to the MongoDB server
    // await client.connect();

    // Access the database and collection
    // const database = client.db('fooddb');
    // const collection = database.collection('menucollection');

    // Fetch data from the collection
    // const data = await collection.find({}).toArray();

    // Log the fetched data
    // console.log(data);
  // } catch (error) {
    // console.error('Error fetching data:', error);
  // } finally {
    // Close the connection
    // await client.close();
  // }
// }

// Call the fetchData function
// fetchData();

// const mongoose = require("mongoose");
// const mongoURL= 'mongodb+srv://adityasuman990:Adityasuman990@wefood1.uderbhl.mongodb.net/fooddb?retryWrites=true&w=majority'
// // const mongoURL1='mongodb+srv://adityasuman990:Adityasuman990@cluster0.vcrlhbc.mongodb.net/?retryWrites=true&w=majority'
// const mongoDB= async ()=>{
//   await mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology: true , family:4}, async(err,result)=>{
//     if(err) console.log("---",err)
//     else{
//       console.log("connected")
//     }
//   });

// }

// module.exports= mongoDB();