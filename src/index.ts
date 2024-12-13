import express, { Application } from 'express';
import exampleRoutes from './routes/example';

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
app.use('/api', exampleRoutes);

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
