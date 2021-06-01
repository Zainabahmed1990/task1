var api = 'http://jsonplaceholder.typicode.com/todos/';
var user = 'http://jsonplaceholder.typicode.com/users/';
var table = document.getElementById('table');

// start feching the data from api
var data = fetch(api).then((res) => res.json()).then((result) => {
	// loop the data and append to the table
	result.forEach((item) => {
		// use fetch user to get user name instead of userId
		fetch(user + item.userId).then((res) => res.json()).then((profile) => {
			var tr = document.createElement('tr');
			var status = item.completed ? 'Yes' : 'No';
			tr.innerHTML = `<td>${item.id}</td><td>${profile.name}</td><td>${item.title}</td><td>${status}</td>`;
			table.append(tr);
		});
	});
});
