
import { Injector } from 'boxed-injector';

import types from '../../config/types';
import repository from './repository';
import service from './service';
import ctrl from './ctrl';

export default (injector: Injector) => {
  const db = injector.get(types.db);
  injector.factory(types.CatRepository, repository);
  injector.register(types.cats, db.collection('cats'));
  injector.factory(types.CatService, service);
  injector.factory(types.CatCtrl, ctrl);
};
