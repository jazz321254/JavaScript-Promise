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

var sequence = Promise.resolve();

keywords.forEach(function(keyword) {
  var searchAPI = api + keyword
  sequence.then(function() {
    return getRepoUrl(searchAPI);
  }).then(getRepoName);
});