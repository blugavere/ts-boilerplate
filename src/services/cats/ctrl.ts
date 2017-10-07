
import types from '../../config/types';
import CatService from './service';
import * as autoBind from 'auto-bind';

class CatCtrl {
  static inject = [
    types.CatService
  ];
  constructor(private service: CatService) {
    autoBind(this);
  }
  findById(req, res, done) {
    const { service } = this;
    const {id} = req.params;
    service.findById(id)
      .then(doc => res.send(doc))
      .catch(done);
  }
}

export default CatCtrl;
