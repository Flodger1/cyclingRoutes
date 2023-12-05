'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert("Ratings", [
      {
        routId: 1,
        value: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 3,
        value: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 2,
        value: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 4,
        value: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ratings", null, {});
  }
};
