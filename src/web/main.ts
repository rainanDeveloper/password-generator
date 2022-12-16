import { app } from './app';

const APP_PORT = Number(process.env['PORT']) || 3000;

app.listen(APP_PORT, '0.0.0.0', () => {
  console.log(`Server running at port ${APP_PORT}`);
});
