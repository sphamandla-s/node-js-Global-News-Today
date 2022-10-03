const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, "src/views"));
console.log(path.join(__dirname, "src/views"))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}))

// Routes
const newsRouter = require(path.join(__dirname, "src/routes/news.js"));



app.get("/", newsRouter);
app.get("/business", newsRouter);
app.get("/technology", newsRouter);
app.get("/entertainment", newsRouter);
app.get("/science", newsRouter);
app.get("/sport", newsRouter);
app.get("/health", newsRouter);
app.post("/search", newsRouter)


app.listen(3000, ()=> {
    console.log("Listening to port 3000")
});