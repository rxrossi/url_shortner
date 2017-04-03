import express from 'express';
import { Url } from '../models';

const router = express.Router();

router.get("/", (req, res) => res.send("Hello World"));

router.get("/new/*", (req, res) => {

  Url.findOne({}).
		sort({ short_url: -1}).
		exec((err, url) => {
			let nextShortUrl = 0;
			if (url) {
				nextShortUrl = +url.short_url+1;
			}
			let newUrl = new Url();
			newUrl.original_url = req.params[0];
			newUrl.short_url = '' + nextShortUrl;

			newUrl.save( (err, url) => {
				if (err) {
					res.send('error saving url' + err );
				}	else {
					const answer = {
						original_url: url.original_url,
						short_url: `http://${req.headers.host}/${url.short_url}`,
					};
					res.send(answer);
				}
			});
		});


	//res.send(answer);
});

router.get('/:num', (req, res) => {
	Url.findOne({
		short_url: req.params.num
	})
	.exec((err, url) => {
		if (err) {
			res.send('could not find this url' + err);
		} else {
			if (url) {
				console.log("redirecting to", url.original_url);
				res.redirect(url.original_url);
			} else {
				res.redirect('/');
			}
		}
	})
});

export default router;
