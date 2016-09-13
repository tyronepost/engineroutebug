import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    hello() {
      alert('hello world');
    }
  }
});
