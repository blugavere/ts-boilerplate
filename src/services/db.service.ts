import * as ConnectionPool from 'tedious-connection-pool';
import { ConnectionConfig, Request } from 'tedious';


export class DatabaseService {
  pool: ConnectionPool;

  private _connectionConfig: ConnectionConfig;
  private _poolConfig: ConnectionPool.PoolConfig;

  constructor (poolConfig: ConnectionPool.PoolConfig, connectionConfig: ConnectionConfig) {
    this._poolConfig = poolConfig;
    this._connectionConfig = connectionConfig;
    this.pool = new ConnectionPool(this._poolConfig, this._connectionConfig);

    // If the pool can't connect to the SQL sever, we want to stop the system. It's heavily dependent on connecting to
    // the database.
    this.pool.on('error', (poolErr) => {
      console.error(poolErr);
      throw poolErr;
    });
  }

}
