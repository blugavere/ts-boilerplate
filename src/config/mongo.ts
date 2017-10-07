
import * as mongo from 'mongodb';

export default config => {
  return mongo.connect('mongodb://localhost/test');
};
