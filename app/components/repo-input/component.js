import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findRepoIssues: function (repo) {
      var repoData = repo.repoUrl.split('github.com')[1];
      var splitData = repoData.split('/');
      var userOrg = splitData[1];
      var repoName = splitData[2];

      var repoUrlString = 'https://api.github.com/repos/' + userOrg + '/' + repoName + '/issues';

      Ember.$.getJSON(repoUrlString, function(data) {
        console.log(data);
      });
    }
  }
});
