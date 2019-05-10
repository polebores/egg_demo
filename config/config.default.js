/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555577934424_1236';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.sequelize = {
    dialect: 'mysql',
    username: 'test',
    password: 'w-657356',
    host: '47.103.192.182',
    port: 3306,
    database: 'test',
  };
  config.alinode = {
    appid: '79651',
    secret: 'fe6d650da745edd8a8af3e3d2d4883e9b31f56ba',
  };
  config.view = {
    //defaultViewEngine: 'nunjucks',            //全局配置
    mapping: {
      '.nj': 'nunjucks',
    },
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
