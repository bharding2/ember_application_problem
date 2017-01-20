import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findRepoIssues: function (repo) {
      console.log(repo.repoUrl);
    }
  }
});
