Ember.Handlebars.registerBoundHelper 'modifier', (value) ->
  return "+#{value}" if +value >= 0
  value