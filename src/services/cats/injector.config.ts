
import { Injector } from 'boxed-injector';

import types from '../../config/types';
import repository from './repository';
import service from './service';
import ctrl from './ctrl';
import Cat from './Cat';
import CatFactory from './factory';

export default (injector: Injector) => {
  const db = injector.get(types.db);
  injector.factory(types.CatCtrl, ctrl);
  injector.factory(types.CatService, service);
  injector.factory(types.CatRepository, repository);
  injector.factory(types.CatFactory, CatFactory);
  injector.register(types.Cat, Cat);

  injector.register(types.cats, db.collection('cats'));
};
