import { DatabaseService } from './db.service';
import { Config } from '../config';

export class Services {

  config: Config;
  database: DatabaseService;

  constructor() {
    this.config = new Config();
    this.database = new DatabaseService(this.config.database.poolConfig, this.config.database.connectionConfig);
  }
}
