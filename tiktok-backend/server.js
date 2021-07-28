import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Data from './data.js'
import Videos from './dbModel.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url = 'mongodb+srv://omar:2mSryQCLGJiathrZ@cluster0.u4d7f.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected successfully');
})

// API endpoints
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listen
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})