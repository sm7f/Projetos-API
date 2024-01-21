// pages/api/users.js
import { app } from '../../src/app';

export default async (req, res) => {
  console.log('Chamando a rota /api/users');

  const fnMiddleware = app.callback();
  await fnMiddleware(req, res);
};
