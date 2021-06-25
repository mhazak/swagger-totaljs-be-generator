exports.install = function() {

	ROUTE('GET /');
	ROUTE('POST /swagger/', swagger);
	
};

function swagger() {

	var self = this;

	RESTBuilder.make(builder => {
		builder.url(self.body.url);
		builder.get();
		builder.exec((err, response) => {

			if (err) {
				console.log(`ERR: \n\n${err}`);
				return;
			}
			self.json(response);
		})
	});
}