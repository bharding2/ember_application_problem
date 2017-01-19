import DS from 'ember-data';

export default DS.Model.extend({
  issuesSince24Hrs: DS.attr('number'),
  issuesSince7Days: DS.attr('number'),
  issuesBefore7Days: DS.attr('number')
});
