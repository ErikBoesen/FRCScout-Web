var submit = document.getElementById('submit'),
    reset = document.getElementById('reset');

var inputs = {
	team: document.getElementById('team'),
	score: document.getElementById('score'),
    match: document.getElementById('match')
};

submit.onclick = function() {
	// Make empty data object
	var data = {};

	// Relace the actual input elements in data array with their values.
	for (var input in inputs) {
		data[input] = inputs[input].value;
		inputs[input].value = '';
	}

	console.log(inputs);
	console.log(data);

	// Convert data structure to JSON
	$.post('index.php', {
		json: JSON.stringify(data)
	});
};

reset.onclick = function() {
    for (var input in inputs) inputs[input].value = '';
    console.log('Reset all inputs.');
};