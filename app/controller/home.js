'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    //ctx.body = 'hi, egg';
    const params = {
      username: 'wb-wfj299479',
    };
    await ctx.render('child.nj', params);
  }
}

module.exports = HomeController;
