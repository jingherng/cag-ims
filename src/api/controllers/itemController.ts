import { Request, Response } from 'express';
import { Item } from '../models/Item';
import { Op } from 'sequelize';
import { v4 } from 'uuid';

export const addItem = async (req: Request, res: Response) => {
  try {
    const { name, category, price } = req.body;
    const [item] = await Item.upsert({
      name,
      category,
      price: parseFloat(price).toFixed(2), // 2 decimal places
      last_updated_dt: new Date(), // date of upsert
    });

    res.json({ id: item.id || v4() });
  } catch (err) {
    console.error(`Error adding item: ${err}`);
    throw err;
  }
};

export const getItemsByDateRange = async (req: Request, res: Response) => {
  try {
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
  } catch (err) {
    console.error(`Error getting items by date range: ${err}`);
    throw err;
  }
};

export const getItemsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const whereCondition = category !== 'all' ? { category } : {};

    const items = await Item.findAll({ where: whereCondition });

    const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

    res.json({
      items,
      total_price: totalPrice
    });
  } catch (err) {
    console.error(`Error getting items by category: ${err}`);
    throw err;
  };
};
