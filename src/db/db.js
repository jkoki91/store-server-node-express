import dotenv from 'dotenv';
// require('dotenv').config();
dotenv.config(); // Cargar variables de entorno
import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 Conectado a MongoDB correctamente');
    console.log(`📂 Base de datos: ${conn.connection.name}`);
  } catch (error) {
    console.error('🔴 Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
