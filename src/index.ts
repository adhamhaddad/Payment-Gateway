import express, { Application } from 'express';
import helmet from 'helmet';

// Express App
const app: Application = express();
const port: number = 3000;

// App Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(express.static('public'));

// App Requests
app.use('/', );

// App Server
app.listen(port, (): void => console.log(`Server Listening on http://localhost:${port}`));

export default app;