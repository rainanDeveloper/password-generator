import { app } from './app';

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Server running at port ${APP_PORT}`);
});
