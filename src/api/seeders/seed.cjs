module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Items', [
      {
        id: 1,
        name: 'Pear',
        category: 'Fruits',
        price: 2.50,
        last_updated_dt: new Date(),
      },
      {
        id: 2,
        name: 'Pen',
        category: 'Stationery',
        price: 1.20,
        last_updated_dt: new Date(),
      }
    ]);
  },
};
