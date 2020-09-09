const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
var cors = require("cors");

// connect mongoDb
connectDb();
//

//load env files
dotenv.config({ path: "./config/config.env" });

//routes import
const resturant = require("./routes/resturants");

const app = express();

//body parser
app.use(express.json());

//make uploads folder public
app.use("/uploads", express.static("uploads"));

//CORS
app.use(cors());

//routes
app.use("/api/v2/resturant", resturant);

const PORT = process.env.PORT || 5500;

const server = app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(1);
});
