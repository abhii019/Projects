import express from 'express';
import cors from 'cors'; // Import CORS package
import { Connection } from './database/db.js';
import router from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

// CORS middleware configuration
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended :true}));
app.use(bodyParser.urlencoded({extended :true}))
// Routes middleware
app.use('/', router);

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));
