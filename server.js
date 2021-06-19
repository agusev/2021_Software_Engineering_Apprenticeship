const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// @route    GET /
// @desc     Get a welcome message
app.get('/', function (req, res) {
	res.send('Weeeeeelcooome!!!!');
});

// @route    POST /test
// @desc     Post a request
app.post('/test', (req, res) => {
	try {
		//get JSON and parse it
		const json = req.body;
		const str = json['string_to_cut'];
		const string_to_cut = JSON.stringify(str);

		let count = 0;
		let return_string = '';

		// check for number of args
		for (key in json) {
			if (json[key]) {
				count++;
			}
		}

		// return string if one argument passed
		if (count == 1 && json[string_to_cut] != {}) {
			for (let i = 0, max = string_to_cut.length - 1; i < max; i += 3) {
				if (i != 0) {
					return_string += string_to_cut[i];
				}
			}

			return_string = `{"return_string" :  "${return_string}"}`;

			res.send(JSON.parse(return_string));
		} else {
			// otherwise send an error
			res.send('incorrect arguments');
		}
	} catch (err) {
		res.send(err);
	}
});

// listen to environment PORT (for deployment) or 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
