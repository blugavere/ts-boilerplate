
import types from '../../config/types';
import CatService from './service';
import * as autoBind from 'auto-bind';
import * as JSONStream from 'JSONStream';
import { Request, Response, NextFunction } from 'express';

class CatCtrl {
  static inject: Array<string> = [
    types.CatService
  ];
  constructor(private service: CatService) {
    autoBind(this);
  }

  findAll(req: Request, res: Response, next: NextFunction): void {
    const { service } = this;
    service.findAll()
      .pipe(JSONStream.stringify())
      .pipe(res)
      .on('error', next);
  }

  findById(req: Request, res: Response, next: NextFunction): void {
    const { service } = this;
    const { id } = req.params;
    service.findById(id)
      .then(doc => {
        if (!doc) {
          res.status(404);
          return res.send('Not found.');
        }
        res.send(doc);
      })
      .catch(next);
  }

}

export default CatCtrl;
