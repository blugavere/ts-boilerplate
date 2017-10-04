import * as express from 'express';
import { Routes } from './routes/routes';
import { Services } from './services/services';


export class Server {
  private _app: express.Application;
  private _services: Services;

  constructor() {
    this._services = new Services();

    // Creates an express aplication, and imports our routes.
    // We keep the routes separate to make the code easer to comprehend.
    this._app = express();
    this._app.use(Routes);

    // Pass services on to express application
    this._app.set('services', this._services);
  }

  start(port: number | string) {
    this._app.listen(port, () => {
      console.log('Server Listening on port:', port);
    });
  }

}
