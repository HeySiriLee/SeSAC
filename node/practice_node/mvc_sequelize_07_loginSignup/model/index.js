const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
// sequelize 객체를 만듦
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db = { sequelize: sequelize, Sequelize: Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.Visitor 에는  sequelize로 visitor table을 정의한 객체가 담음
db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
