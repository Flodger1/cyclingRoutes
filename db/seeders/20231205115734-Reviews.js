"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reviews", [
      {
        routId: 1,
        userId: 1,
        text: "Nice route",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 3,
        userId: 2,
        text: "Nice view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 2,
        userId: 4,
        text: "Nice road",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routId: 3,
        userId: 3,
        text: "111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
