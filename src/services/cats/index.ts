
import { Application, Router } from 'express';
import { Injector } from 'boxed-injector';
import types from '../../config/types';
import setup from './injector.config';

export default (app: Application, injector: Injector) => {
  setup(injector);
  const router = Router();
  const ctrl = injector.get(types.CatCtrl);
  router.get('/:id', ctrl.findById);

  app.use('/cats', router);
};