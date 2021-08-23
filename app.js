require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoute = require('./routes/api');
const categoryRoute = require('./routes/category');
const galleryRoute = require('./routes/gallery');
const tagRouter = require('./routes/tag');
const Helper = require('./utils/helper');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());

app.use("/api", apiRoute);
app.use('/category', categoryRoute);
app.use('/gallery', galleryRoute);
app.use('/tag', tagRouter);
app.use('/product',productRoute);
app.use('/user',userRoute);

app.listen(process.env.PORT, () => console.log(`Server is running at port ${process.env.PORT}`));

app.use((req, res, next) => {
    const error = new Error("Route Not found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    const error = app.get('env') == "development" ? err : {};
    error.status = error.status || 500;
    res.status(error.status).json(Helper.formatMsg(0, error.message, { name: error.name, message: error.message }));
});

// require('./migrations/user').migrate();