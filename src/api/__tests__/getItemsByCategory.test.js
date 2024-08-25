import { getItemsByCategory } from '../controllers/itemController';
import { Item } from '../models/Item';

jest.mock('../models/Item');

describe('getItemsByCategory controller', () => {
  it('should retrieve items for a valid category', async () => {
    const mockItems = [{
      id: 1,
      price: 10.00,
      category: 'Electronics'
    }, {
      id: 2,
      price: 20.00,
      category: 'Electronics'
    }];
    const category = 'Electronics';

    Item.findAll.mockResolvedValueOnce(mockItems);

    const req = { query: { category } };
    const res = { json: jest.fn() };

    await getItemsByCategory(req, res);

    expect(Item.findAll).toHaveBeenCalledWith({
      where: { category },
    });

    expect(res.json).toHaveBeenCalledWith({
      items: mockItems,
      total_price: 30.00,
    });
  });

  it('should retrieve all items when category is "all"', async () => {
    const mockItems = [{
      id: 1,
      price: 10.00,
      category: 'Electronics'
    }, {
      id: 2,
      price: 20.00,
      category: 'Electronics'
    }];

    Item.findAll.mockResolvedValueOnce(mockItems);

    const req = { query: {} };
    const res = { json: jest.fn() };

    await getItemsByCategory(req, res);

    expect(Item.findAll).toHaveBeenCalledWith({
      where: {},
    });

    expect(res.json).toHaveBeenCalledWith({
      items: mockItems,
      total_price: 30.00,
    });
  });

  it('should return an empty array and total price of 0 for invalid category', async () => {
    const category = 'invalid_category';

    Item.findAll.mockResolvedValueOnce([]);

    const req = { query: { category } };
    const res = { json: jest.fn() };

    await getItemsByCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
      items: [],
      total_price: 0,
    });
  });

  it('should handle database errors', async () => {
    const error = new Error('Database error');
    Item.findAll.mockRejectedValueOnce(error);

    const req = {
      query: {
        category: 'Electronics'
      }
    };
    const res = { json: jest.fn() };

    await expect(getItemsByCategory(req, res)).rejects.toEqual(error);
  });
});
