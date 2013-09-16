import Resolver from 'resolver';
import router from 'appkit/router';

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

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

App.Jsonable = Ember.Mixin.create({
  excludedJsonProperties: [],
  getJson: function() {
      var v, json = {};
      for (var key in this) {
          if (this.hasOwnProperty(key) && this.excludedJsonProperties.indexOf(key) === -1) {
              v = this[key];
              if (v === 'toString') {
                  continue;
              } 
              if (Ember.typeOf(v) === 'function') {
                  continue;
              }
              if (App.Jsonable.detect(v))
                  v = v.getJson();
              json[key] = v;
          }
      }
      return json;
  }
});

App.computed = {};
App.computed.modifierFor = function(dependency) {
  return Ember.computed(dependency, function() {
    return Math.floor((this.get(dependency) - 10) / 2);
  });
};

export default App;
