
import types from '../../config/types';
import CatRepository from './repository';
import * as autoBind from 'auto-bind';

class CatService {
  static inject = [
    types.CatRepository
  ];

  constructor(private repo: CatRepository) {
    autoBind(this);
  }

  findById(id) {
    const { repo } = this;
    return repo.findById(id);
  }
}

export default CatRepository;
