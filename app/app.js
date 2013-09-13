import Resolver from 'resolver';
import router from 'appkit/router';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});

App.RangeField = Ember.TextField.extend({
  type: 'range',
  attributeBindings: ['min', 'max', 'step']
});

export default App;
