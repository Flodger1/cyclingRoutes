"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Routs", [
      {
        userId: 1,
        routName: "Lesnaya",
        location: "Moscow",
        mapData: ["55.837267, 37.546394", "55.761264, 37.609816" ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        routName: "Dorojnaya",
        location: "Rostov",
        mapData: ["55.837267, 37.546394", "55.761264, 37.609816" ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        routName: "Pionerskaya",
        location: "Nijnii",
        mapData: ["55.837267, 37.546394", "55.761264, 37.609816" ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        routName: "Oblostanaya",
        location: "Sochi",
        mapData: ["55.837267, 37.546394", "55.761264, 37.609816" ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Routs", null, {});
  },
};
