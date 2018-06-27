import reddit from './redditapi.js'

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


// Form event listener
searchForm.addEventListener('submit', event => {

	event.preventDefault();

	const searchTerm = searchInput.value;
	const sortBy = document.querySelector('input[name="sortby"]:checked').value;
	const searchLimit = document.getElementById('limit').value;

	if (!searchTerm) {
		showMessage('Please add a search term', 'alert-danger');
	}

	searchInput.value = '';

	reddit.search(searchTerm, searchLimit, sortBy)
	.then(results => {
		let output = `<div class='card-columns'>`

		results.forEach(post => {

		const image = post.preview ? post.preview.images[0].source.url : 'https://assets.entrepreneur.com/content/3x2/1300/20180301190808-reddit-logo.jpeg?width=700&crop=2:1'; 

			output += `
			<div class="card">
			  <img class="card-img-top" src="${image}" alt="Card image cap">
			  <div class="card-body">
			    <h5 class="card-title">${post.title}</h5>
			    <p class="card-text">${truncateText(post.selftext, 100)}</p>
			    <a href="${post.url}" class="btn btn-primary" target="_blank">Read More</a>
			    <hr>
			    <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
			    <span class="badge badge-dark">Subreddit: ${post.score}</span>			
			  </div>
			</div>
			`;
		})

		output += `</div>`;
		document.getElementById('results').innerHTML = output;
	});

})

// show message
function showMessage(message, className) {
	const div = document.createElement('div');
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(message));
	const searchContainer = document.getElementById('search-container');
	const search = document.getElementById('search');

	searchContainer.insertBefore(div, search);

	setTimeout(() => {
		document.querySelector('.alert').remove();
	}, 3000)
}

//truncate text
function truncateText(text, limit) {
	const shortened = text.indexOf(' ', limit)
	if (shortened == -1) return text;
	return text.substr(0, shortened);
}