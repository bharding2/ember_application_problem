import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      'Number of open issues that were opened in the last 24 hours: ' + '0',
      'Number of open issues that were opened in the last 7 days: ' + '0',
      'Number of open issues that were opened more than 7 days ago: ' + '0'
    ];
  }
});
