import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middlewares/errorHandler.js';


dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use('/api', bookRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Welcome to the Express and MongoDB CRUD API.');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});