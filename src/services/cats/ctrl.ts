
import types from '../../config/types';
import CatService from './service';
import * as autoBind from 'auto-bind';
import * as JSONStream from 'JSONStream';

class CatCtrl {
  static inject = [
    types.CatService
  ];
  constructor(private service: CatService) {
    autoBind(this);
  }

  findAll(req, res, done) {
    const { service } = this;
    service.findAll()
      .pipe(JSONStream.stringify())
      .pipe(res)
      .on('error', done);
  }

  findById(req, res, done) {
    const { service } = this;
    const { id } = req.params;
    service.findById(id)
      .then(doc => res.send(doc))
      .catch(done);
  }

}

export default CatCtrl;
