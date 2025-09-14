import { app, port } from './app';
import errorHanddler from './middleware/errorHanddler';

const main = () => {
  app.listen(port);
  app.use(errorHanddler);
  console.log('🚀 Servidor corriendo en http://localhost:' + port);
};

main();
