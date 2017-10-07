
import * as mongo from 'mongodb';

export default config => {
  const host: string = process.env['MONGO_HOST'] || 'localhost';
  const port: string = process.env['MONGO_PORT'] || '27017';
  const db: string = process.env['MONGO_DB'] || 'test';
  return mongo.connect(`mongodb://${host}:${port}/${db}`);
};
