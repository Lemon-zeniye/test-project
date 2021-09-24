import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";



import router from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.use("/posts", router);

app.get("/", (req, res) => {
    res.send("Hello Welcome");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECT_DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => { console.log(`Server running on port : ${PORT}`)}))
.catch((error) =>  console.log(error.message));



