import express from 'express';
import cors from 'cors';
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./db/db.js";

const app = express();
const PORT = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Conectar a la base de datos
connectDB();

// Middleware para poder leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Empezamos a utilizar las rutas de productos
app.use("/api/products", productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
