import { getItemsByDateRange } from '../controllers/itemController';
import { Item } from '../models/Item';
import { Op } from 'sequelize';

jest.mock('../models/Item');

describe('getItemsByDateRange controller', () => {
  it('should retrieve items within the specified date range and calculate total price', async () => {
    const mockItems = [
      { id: 1, price: 10.00, last_updated_dt: new Date('2024-08-22') },
      { id: 2, price: 20.00, last_updated_dt: new Date('2024-08-23') },
    ];
    const dtFrom = '2024-08-21';
    const dtTo = '2024-08-24';

    Item.findAll.mockResolvedValueOnce(mockItems);

    const req = { query: { dt_from: dtFrom, dt_to: dtTo } };
    const res = { json: jest.fn() };

    await getItemsByDateRange(req, res);

    expect(Item.findAll).toHaveBeenCalledWith({
      where: {
        last_updated_dt: {
          [Op.between]: [expect.any(Date), expect.any(Date)],
        },
      },
    });

    expect(res.json).toHaveBeenCalledWith({
      items: mockItems,
      total_price: 30.00,
    });
  });
});
