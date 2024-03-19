const express = require("express");
const app= express();

// console.dir(app);
let port =8080;

app.listen(port, ()=>{
    console.log(`app listeing on port ${port}`);
})