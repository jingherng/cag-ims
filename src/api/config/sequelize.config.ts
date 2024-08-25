import { Sequelize } from 'sequelize-typescript';
import { Item } from '../models/Item.js';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'TO_BE_UPDATED',
  password: 'TO_BE_UPDATED',
  database: 'inventory_db',
  models: [Item],
});

export default sequelize;

