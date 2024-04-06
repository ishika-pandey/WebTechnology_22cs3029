const express =require("express");
const path=require("path");
const app =express();
const hbs=require("hbs");
require("./db/conn");

const port =process.env.port || 3000;
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
