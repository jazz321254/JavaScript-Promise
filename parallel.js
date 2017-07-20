var keywords = ['google', 'amazon', 'facebook'];
var api = 'https://api.github.com/search/users?q=';

function getData(url) {
  return fetch(url).then(function(response) {
    return response.json();
  })
}

function getRepoUrl(url) {
  return getData(url).then(function(user) {
    return user.items[0].repos_url
  })
}

function getRepoName(url) {
  return getData(url).then(function(repo) {
    console.log(repo[0].full_name);
  });
}

var urls = keywords.map((key) => { return api + key });

var promiseAll = function(urls, promise){
	var tasks = [];
	urls.forEach((url, index) => {
  	tasks[index]= promise(url);
  });
  return tasks;
}

Promise.all(promiseAll(urls, getRepoUrl))
.then((reps) => {
	promiseAll(reps, getRepoName);
})