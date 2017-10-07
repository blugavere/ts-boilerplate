
import types from '../../config/types';
import { Collection, ObjectId } from 'mongodb';
import * as autoBind from 'auto-bind';

class CatRepository {
  static inject = [
    types.cats
  ];

  constructor(private collection: Collection) {
    autoBind(this);
  }

  findAll() {
    const { collection } = this;
    return collection.find();
  }

  findById(id): Promise<any> {
    const { collection } = this;
    return collection.findOne({ _id: new ObjectId(id) });
  }

}

export default CatRepository;
