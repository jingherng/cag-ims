import express from 'express';
import cors from 'cors';
import sequelize from './config/sequelize.config.js';
import itemRoutes from './routes/itemRoutes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

