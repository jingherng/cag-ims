import { Request, Response } from 'express';
import { Item } from '../models/Item.js';
import { Op, UUIDV4 } from 'sequelize';

export const addItem = async (req: Request, res: Response) => {
  const { name, category, price } = req.body;
  const [item] = await Item.upsert({
    name,
    category,
    price: parseFloat(price).toFixed(2), // 2 decimal places
    last_updated_dt: new Date(), // date of upsert
  });

  res.json({ id: item.id || UUIDV4 });
};

export const getItemsByDateRange = async (req: Request, res: Response) => {
  const { dt_from, dt_to } = req.query;
  const items = await Item.findAll({
    where: {
      last_updated_dt: {
        [Op.between]: [new Date(dt_from as string), new Date(dt_to as string)],
      },
    },
  });

  const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
  res.json({
    items,
    total_price: totalPrice
  });
};

export const getItemsByCategory = async (req: Request, res: Response) => {
  const { category } = req.query;
  const whereCondition = category !== 'all' ? { category } : {};

  const items = await Item.findAll({ where: whereCondition });

  const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
  res.json({
    items,
    total_price: totalPrice
  });
};

