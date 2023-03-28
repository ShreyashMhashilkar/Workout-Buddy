const express = require("express");
const cors = require("cors");
const colors = require("colors")
const mongoose = require("mongoose")

const app = express();
const router = require("./routes/userRoute.js")

app.use(express.json());
app.use(cors());
// app.use((_req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
  
//     next();
//   });

app.use(router);
// app.use("/auth", userRouter);
// app.use("/recipes", recipesRouter);
try{
    mongoose.connect(`mongodb+srv://shreyash890:shrutika890@cluster0.7lkclym.mongodb.net/workout`)
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white)
}catch(error){
    console.log(`${error}`.bgRed)
}



app.listen(5001, ()=>console.log("server started"));
