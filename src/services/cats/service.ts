
import types from '../../config/types';
import CatRepository from './repository';
import * as autoBind from 'auto-bind';
import { Readable } from 'stream';

class CatService {
  static inject: Array<string> = [
    types.CatRepository
  ];

  constructor(private repo: CatRepository) {
    autoBind(this);
  }

  findAll(): Readable {
    const { repo } = this;
    return repo.findAll();
  }

  findById(id: string): Promise<any> {
    const { repo } = this;
    return repo.findById(id);
  }
}

export default CatRepository;
