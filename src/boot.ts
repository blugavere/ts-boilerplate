
import {Server} from './server';

const server = new Server();

const app = server.start(process.env.PORT || 3000);

export default app;
