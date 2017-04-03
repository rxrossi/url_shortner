import express from "express";
import bodyParser from "body-parser";
import database from './config/database';
import routes from './routes';

const app = express();

const configureExpress = () => {
	app.use(bodyParser.json());
	app.use('/', routes);

	return app;
}

export default () => database.connect().then(configureExpress);
