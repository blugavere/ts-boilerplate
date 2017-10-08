

import types from '../../config/types';
import * as autoBind from 'auto-bind';
import Cat from './Cat';

class CatFactory {
  static inject: Array<string> = [];

  constructor() {
    autoBind(this);
  }

  reconstitute(data: any): Promise<Cat> {
    return Promise.resolve(new Cat());
  }

}

export default CatFactory;
