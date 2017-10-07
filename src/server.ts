import * as express from 'express';
import { Routes } from './routes/routes';
import { Services } from './services/services';
import { Injector } from 'boxed-injector';
import * as helmet from 'helmet';
import mongo from './config/mongo';
import cats from './services/cats';
import types from './config/types';

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

    const injector = new Injector();

    mongo({}).then(conn => {
      const Cats = conn.collection('cats');
      injector.register(types.db, conn);
      cats(app, injector);
    }).catch(e => console.log(e));

    // Pass services on to express application
    this._app.set('services', {});
  }

  start(port: number | string) {
    this._app.listen(port, () => {
      console.log('Server Listening on port:', port);
    });
  }

}
