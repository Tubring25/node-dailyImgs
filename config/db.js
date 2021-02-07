const Sequelize = require("sequelize");
const config = {
  database: "dailyImgs",
  user: "root",
  password: "123456",
};
const sequelize = new Sequelize(config.database, config.user, config.password, {
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
});

sequelize.authenticate().then(()=>{
  console.log('已成功连接数据库')
}).catch(()=>{
  console.error('连接数据库失败')
})

module.exports = sequelize
