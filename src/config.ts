import { ConnectionConfig } from 'tedious';
import { PoolConfig } from 'tedious-connection-pool';

export class Config {
  database: {
    connectionConfig: ConnectionConfig;
    poolConfig: PoolConfig;
  };

  constructor() {
    this.database = {
      // This is how many connections the app can make to the database
      poolConfig: {
        min: 1,
        max: 10,
        log: true
      },
      // The following environment variables are used to initiate a database connection.
      // Customize these to fit your application.
      // SQL_USER
      // SQL_PASS
      // SQL_HOST
      connectionConfig: {
        userName: process.env['SQL_USER'],
        password: process.env['SQL_PASS'],
        server: process.env['SQL_HOST']
      }
    };
  }
}
