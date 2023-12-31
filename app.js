

// const express = require("express");
// require("dotenv").config();
// const app = express();

// // route
// app.get("/", (req, res) => {
//   // Sending This is the home page! in the page
//   res
//     .status(200)
//     .send(`This is my first deployment on .js file. ${process.env.PORT} Work has been done. `);
// });

// // Listening to the port 
// let PORT = process.env.PORT ? process.env.PORT : 8000;
// console.log(PORT);
// app.listen(PORT, () => {
//   console.log(`Server is running...`);
// });





// new message code

// require("dotenv").config();
// const app = express();

// // route
// app.get("/", (req, res) => {
//   // Sending the updated message in the response
//   res
//     .status(200)
//     .send("This is my first deployment on .js file, Work has been done.");
// });

// // Listening to the port 
// let PORT = process.env.PORT ? process.env.PORT : 8000;
// console.log(PORT);
// app.listen(PORT, () => {
//   console.log(`Server is running...`);
// });




// message update

const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
    .send(`This is my first deployment on .js file ${process.env.PORT}`);
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 8000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
