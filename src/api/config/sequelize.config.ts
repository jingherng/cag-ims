import { Sequelize } from 'sequelize-typescript';
import { Item } from '../models/Item.js';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'inventory_db',
  models: [Item],
});

export default sequelize;

