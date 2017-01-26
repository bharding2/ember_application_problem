import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findRepoIssues: function (repo) {
      var repoData = repo.repoUrl.split('github.com')[1];
      var splitData = repoData.split('/');
      var userOrg = splitData[1];
      var repoName = splitData[2];
      var issueResultPage = 0;

      var repoUrlString = 'https://api.github.com/repos/' + userOrg + '/' + repoName + '/issues?state=all&per_page=100&page=' + issueResultPage;

      var issuesSince24Hrs = 0;
      var issuesSince7Days = 0;
      var issuesBefore7Days = 0;
      var todayBase = new Date();

      console.log(todayBase);

      Ember.$.getJSON(repoUrlString, function(data) {
        console.log(data);
        data.forEach((ele) => {
          if (Date.parse(ele.created_at) >= todayBase - 86400000) issuesSince24Hrs++;
          if (Date.parse(ele.created_at) >= todayBase - 604800000) issuesSince7Days++;
          if (Date.parse(ele.created_at) <= todayBase - 604800000) issuesBefore7Days++;
        });
        console.log(issuesSince24Hrs, issuesSince7Days, issuesBefore7Days);
      });
    }
  }
});
