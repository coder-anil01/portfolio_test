import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import paymentRoute from './route/paymentRoute.js'

dotenv.config();

// esmodulsefix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./client/build")))

// app.use('/api/v1/review', reviewsRoute);
app.use('/api/v1/payment', paymentRoute);

app.use('*', function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

app.listen(PORT, () => {
    console.log(`App Lisine On ${PORT}`);
})