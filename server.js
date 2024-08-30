const express = require("express");
const path = require('path');
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req,res) => {
    res.render("index", { title: 'Home' });
});

app.get("/about", (req, res) => {
    res.render("about", { title: 'About' });
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio", { title: 'Portfolio' });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: 'Contact' });
});
