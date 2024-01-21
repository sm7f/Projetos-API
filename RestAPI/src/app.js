// src/app.js
const Koa = require('koa');
const Router = require('koa-router');
const { db } = require('./db');

const app = new Koa();
const router = new Router();

router.get('/api/users', async (ctx) => {
  console.log('Rota /api/users atingida');
  const result = await db.query('SELECT * FROM usuarios');
  ctx.body = result.rows;
});

app.use(router.routes());

module.exports = { app };
