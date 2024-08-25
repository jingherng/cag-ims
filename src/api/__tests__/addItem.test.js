import { addItem } from '../controllers/itemController';
import { Item } from '../models/Item';

jest.mock('../models/Item');

describe('addItem controller', () => {
  it('should create a new item and return its id', async () => {
    const mockItem = {
      id: 1,
      name: 'Test Item',
      category: 'Electronics',
      price: 10.50,
      last_updated_dt: expect.any(Date),
    };
    Item.upsert.mockResolvedValueOnce([mockItem]);

    const req = {
      body: {
        id: 1,
        name: 'Test Item',
        category: 'Electronics',
        price: '10.50'
      }
    };
    const res = { json: jest.fn() };

    await addItem(req, res);

    expect(Item.upsert).toHaveBeenCalledWith({
      name: 'Test Item',
      category: 'Electronics',
      price: '10.50',
      last_updated_dt: expect.any(Date),
    });

    expect(res.json).toHaveBeenCalledWith({ id: 1 });
  });

  it('should return a generated id if no id exists on the created item', async () => {
    const mockItem = {
      name: 'Test Item',
      category: 'Electronics',
      price: 10.50,
      last_updated_dt: expect.any(Date),
    };
    mockItem.id = undefined;
    Item.upsert.mockResolvedValueOnce([mockItem]);

    const req = {
      body: {
        name: 'Test Item',
        category: 'Electronics',
        price: '10.50'
      }
    };
    const res = { json: jest.fn() };

    await addItem(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/) });
  });

  it('should handle errors during upsert', async () => {
    const error = new Error('Database error');
    Item.upsert.mockRejectedValueOnce(error);

    const req = {
      body: {
        name: 'Test Item',
        category: 'Electronics',
        price: '10.50'
      }
    };
    const res = { json: jest.fn() };

    await expect(addItem(req, res)).rejects.toEqual(error);

    expect(res.json).not.toHaveBeenCalled();
  });
});
