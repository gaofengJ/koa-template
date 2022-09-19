import { Sequelize } from 'sequelize';
import { log } from 'console';
import { MYSQL_CONF } from '@/config/db';

const mysql = new Sequelize(
  MYSQL_CONF.database,
  MYSQL_CONF.username,
  MYSQL_CONF.password,
  {
    // 数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
    dialect: 'mysql',
    // 自定义链接地址，可以是ip或者域名，默认本机：localhost
    host: MYSQL_CONF.host,
    // 自定义端口，默认3306
    port: MYSQL_CONF.port,
    // 是否开始日志，默认是用console.log。建议开启，方便对照生成的sql语句
    logging: false,
    // 是否将undefined转化为NULL。默认: false
    omitNull: true,
    // pg中开启ssl支持。默认: false
    native: true,
    // 数据库默认参数,全局参数
    define: {
      underscored: true, // 注意需要加上这个，如果不加这个 update_at会被转变成 updateAt故报错
      freezeTableName: true,
      charset: 'utf8',
      timestamps: true, // 是否添加时间戳（create_at和update_at）
    },
    // 是否强制同步，force：先删除后同步，慎用！！！
    // sync: { force: true },
    // 连接池配置
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
  },
);

mysql.sync({ alter: true }); // 模型新增字段会在数据库中新增
mysql.authenticate()
  .then(() => {
    log('mysql connect success!');
  })
  .catch(() => {
    log('mysql connect fail');
  });

export default mysql;
