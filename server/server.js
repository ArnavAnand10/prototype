const express = require("express")
const app = express();
const cors = require("cors");
const router = require("./routes/routes");


app.use(express.json());
app.use(cors())
app.use("/",router)






app.listen(8080,()=>{
    console.log("Server Started on PORT:8080");
})
