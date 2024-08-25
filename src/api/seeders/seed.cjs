const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Items', [
      {
        id: v4(),
        name: 'Pear',
        category: 'Fruits',
        price: 2.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Apple',
        category: 'Fruits',
        price: 3.00,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Durian',
        category: 'Fruits',
        price: 12.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Mango',
        category: 'Fruits',
        price: 7.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Pomegrenate',
        category: 'Fruits',
        price: 1.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Kiwi',
        category: 'Fruits',
        price: 3.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Watermelon',
        category: 'Fruits',
        price: 5.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Pen',
        category: 'Stationary',
        price: 1.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Book',
        category: 'Stationary',
        price: 5.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Paper',
        category: 'Stationary',
        price: 0.70,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Eraser',
        category: 'Stationary',
        price: 0.50,
        last_updated_dt: new Date(),
      },
      {
        id: v4(),
        name: 'Folder',
        category: 'Stationary',
        price: 1.90,
        last_updated_dt: new Date(),
      },
    ]);
  },
};
