"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        userName: "Evgeniia",
        email: "1@1",
        password: "111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Svetlana",
        email: "2@2",
        password: "222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Sergei",
        email: "3@3",
        password: "333",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Bron",
        email: "4@4",
        password: "444",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
