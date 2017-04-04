import setupApp from './src/app';
const port = 3000;
//TODO:
//add validator to new urls
//send null for both when new url is not valid
//send error msg when given short_url is not found
//change model and route to user short_url_id instead of short_url because it makes more sense

setupApp()
	.then( app => app.listen(port, () => console.log(`app running on port ${port}`)))
	.catch( (error) => {
		console.error(error);
		process.exit(1);
	});
