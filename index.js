function visit(msg, callback) {
	console.log(msg);

	const out = {
		message: msg,
		data: {
			init: true,
		},
	};
	callback(out);
	console.log(out);
}

visit("Salut c'est lorenzo", (toto) => {
	const data = toto.data || (toto.data = {});
	toto.tag = 'h1';

	data.test = 'test';
});
