describe('GET /new', () => {
	const host = 'http:localhost/';
	const enteredUrl = 'http://www.google.com';
	const short_url = host.concat('1');
	const expectedJSON = {
		original_url: enteredUrl,
		short_url,
	};

	it('should return expectedJSON when passed enteredUrl', done => {
		request
			.get(`/new/${enteredUrl}`)
			.end( (err, res) => {
				console.log(res.req._headers.host);
				expect(res.body[0]).to.eql(expectedJSON);
				done(err);
			})
	});

});
