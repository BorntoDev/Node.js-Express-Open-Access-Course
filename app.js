const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.send("Hello World !! I'm Product");
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello World !! I'm Product 1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'Prameza55+', customers: ["Kitti113", "Kittikorn", "Kitty"] });

})

app.listen(PORT, () => {
    debug("Listening on port" + chalk.red(" : " + PORT));
})