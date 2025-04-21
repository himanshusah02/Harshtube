// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});







connectDB()
  .then(() => {
    //that are use for the find the port for run the code 
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  }) 
  .catch((err) => {
    console.log(" MngoDB connection failed ", err);
  });



























  

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRr: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR :", error);
    throw err;
  }
})();
*/
