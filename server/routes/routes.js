const express = require("express");

const router = express.Router();

router.get("/",()=>{
    console.log("working");
})



module.exports = router