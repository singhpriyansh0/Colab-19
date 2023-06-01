import express from "express";

const app = express();
const port = 3500

app.get("/" , (req, res) => {
    res.send("Completed gg")
})

app.get("/again" , (req, res) => {
    res.send(" gg again ")
})

app.listen(port, ()=>{
    console.log(`app is listining at port ${port}`)
})

