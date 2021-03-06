
import types from '../../config/types';
import { Collection, ObjectId } from 'mongodb';
import * as autoBind from 'auto-bind';
import { Readable } from 'stream';

class CatRepository {
  static inject: Array<string> = [
    types.cats
  ];

  constructor(private collection: Collection) {
    autoBind(this);
  }

  findAll(): Readable {
    const { collection } = this;
    return collection.find();
  }

  findById(id): Promise<any> {
    const { collection } = this;
    if (!ObjectId.isValid(id)) {
      return Promise.resolve(null);
    }
    return collection.findOne({ _id: new ObjectId(id) });
  }

}

export default CatRepository;
