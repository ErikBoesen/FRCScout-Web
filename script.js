// Define buttons.
var submit = document.getElementById('submit'),
    reset = document.getElementById('reset');

// Generate an array of all <input>s in document.
// These will be used to generate an object.
var tags = document.getElementsByTagName('input');
// Create empty object.
var inputs = {};
// Make each element be the value to a key named after its ID.
for (i = 0; i < tags.length; i++) inputs[tags[i].id] = tags[i];

// Submit data (also clears all fields).
submit.onclick = function() {
    // Make empty data object
	var data = {};
    // Go through each input in the data object and fill in the data from it
	for (var input in inputs) {
        // Input the values from each <input> into the data object
        data[input] = inputs[input].value;
        // Clear <input>s to prepare for new inputs after submission
		inputs[input].value = '';
	}

    data['timestamp'] = new Date().getTime();

	console.log(data); // Debug

	// Send data off to store.php, which will handle
    var req = new XMLHttpRequest();
    req.open('POST', 'store.php');
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('json=' + JSON.stringify(data));
};

// Clear all fields without submitting any data.
reset.onclick = function() {
    for (var input in inputs) inputs[input].value = '';
    console.log('Reset all inputs.');
};