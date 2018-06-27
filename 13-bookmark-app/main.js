document.getElementById('myform').addEventListener('submit', saveBookmark);

function saveBookmark(e) {

	e.preventDefault();

	let siteName = document.getElementById('siteName').value;
	let siteUrl = document.getElementById('siteURL').value;

	// clear form
	document.getElementById('myform').reset();

	if (!validateForm(siteName, siteUrl)) {
		return false;
	}

	let bookmark = {
		name: siteName,
		url: siteUrl
	};
	// Local Storage 

	// localStorage methods
	// .setItem()
	// .getItem()
	// .removeItem()
 

 	if (!localStorage.getItem('bookmarks')) {
 		let bookmarks = [];
 		bookmarks.push(bookmark);
 		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 	} else {
 		let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
 		bookmarks.push(bookmark);
 		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 	}

 	// re-fetch bookmarks 
	fetchBookmarks();
}

	// delete bookmark

	function deleteBookmark(url) {
		let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		for (let i = 0; i < bookmarks.length; i++) {
			// delete bookmark from array
			if (bookmarks[i].url == url) bookmarks.splice(i, 1);
		}
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		// re-fetch bookmarks 
		fetchBookmarks();
	}


 	// fetch bookmarks;

window.addEventListener('DOMContentLoaded', fetchBookmarks) 	

function fetchBookmarks() {
 	let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
 	let bookmarksResults = document.getElementById('bookmarks-results');

 	bookmarksResults.innerHTML = ``;

 	for (let bookmark of bookmarks) {
 		let name = bookmark.name;
 		let url = bookmark.url; 

 		bookmarksResults.innerHTML += `
 		<div class='well'> 
 			<h3>${name} 
 			<a class='btn btn-default' target='_blank' href='${url}'>Visit</a>
 			<a class='btn btn-danger' href='#' onclick='deleteBookmark("${url}")'>Delete</a>
 			</name>
 		</div>`
 	}

 }


 // validation

 function validateForm(siteName, siteUrl) {
 		if (!siteName || !siteUrl) {
		alert('Please fill in the form');
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if (!siteUrl.match(regex)) {
		alert('Please use a valid URL');
		return false;
	}

	return true
 }