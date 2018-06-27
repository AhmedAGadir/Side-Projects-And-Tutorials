let input = document.getElementById('search-user');
input.addEventListener('keyup', search)

function search() {
	let username = input.value;
	console.log()

	// make request to Github
	var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);
            
            document.getElementById('profile').innerHTML = `
			<div class="panel panel-default">
			 <div class="panel-heading">
			    <h3 class="panel-title">${user.name}</h3>
			  </div>
			  <div class="panel-body">
			    <div class='row'>
			      <div class="col-md-4">
			        <img src="${user.avatar_url}" class='thumbnail avatar'>
					<a href="${user.html_url}" target="_blank" class="btn btn-danger btn-block mt-2">View Profile</a>
			      </div>
			      <div class="col-md-8 mt-4">
						<span class="label label-success">Public repos: ${user.public_repos}</span>
						<span class="label label-info">Gists: ${user.public_gists}</span>
						<span class="label label-warning">Followers: ${user.followers}</span>
						<span class="label label-danger">Following: ${user.following}</span>
					<br><br>

				  <ul class="list-group">
				    <li class="list-group-item">Company: ${user.company}</li>
				    <li class="list-group-item">Website/blog: ${user.blog}</li>
				    <li class="list-group-item">Location: ${user.location}</li>
				    <li class="list-group-item">Member Since: ${user.created_at}</li>
				  </ul>

			      </div>
			    </div>
			  </div>
			</div>

			<h3 class="page-header mt-4 mb-2">Latest Repos:</h3>
			<div id='repos'></div>`

			// second AJAX request

			var xhr2 = new XMLHttpRequest();
		    xhr2.onload = function() { // within this function ‘this’ refers to the xhr object
		        if (this.status == 200) {
		            let repos = JSON.parse(this.responseText);
		            
		            repos.forEach(repo => {
		            	document.getElementById('repos').innerHTML += `
							<div class='well'>
								<div class='row'>
									<div class="col-md-7">
										<strong>${repo.name}</strong>: ${repo.description}
									</div>
									<div class="col-md-3">
										<span class="label label-success">Forks: ${repo.forks_count}</span>
										<span class="label label-info">Watchers: ${repo.watchers_count}</span>
										<span class="label label-warning">Stars: ${repo.stargazers_count}</span>									</div>
									<div class="col-md-2">
										<a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo Page</a>
									</div>
								</div>
							</div>
		            	`
		            })


		        } else {
		            console.log("We connected to the server but it returned an error.");
		        }
		    }
		    xhr2.onerror = function() {
		        console.log("Connection error"); // better to do something more useful
		    };
		    xhr2.open('GET', `https://api.github.com/users/${username}/repos?sort=updated&per_page=5&client_id=be5fa2afbb289c972125&client_secret=ec091cf994ab4302c35f30a9c7ba8401dad4550e`);
		    xhr2.send();




        } else {
            console.log("We connected to the server but it returned an error.");
        }
    }
    xhr.onerror = function() {
        console.log("Connection error"); 
    };
    xhr.open('GET', `https://api.github.com/users/${username}?client_id=be5fa2afbb289c972125&client_secret=ec091cf994ab4302c35f30a9c7ba8401dad4550e`);
    xhr.send();

}

input.value = 'ahmedagadir'
document.querySelector('nav a').addEventListener('click', search);
document.querySelector('nav a').click();