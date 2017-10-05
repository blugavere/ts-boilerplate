import * as express from 'express';
import { Routes } from './routes/routes';
import { Services } from './services/services';
import * as Injector from 'boxed-injector';
import * as helmet from 'helmet';

export class Server {
  private _app: express.Application;
  private _services: Services;

  constructor() {
    const app = express();
    app.use(helmet());
    app
      .disable('etag')
      .disable('x-powered-by');

      // this._services = new Services();

    // Creates an express aplication, and imports our routes.
    // We keep the routes separate to make the code easer to comprehend.
    this._app = app;
    this._app.use(Routes);

    // Pass services on to express application
    this._app.set('services', {});
  }

  start(port: number | string) {
    this._app.listen(port, () => {
      console.log('Server Listening on port:', port);
    });
  }

}
