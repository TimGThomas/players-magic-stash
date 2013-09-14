router = Ember.Router.map ->
  @resource 'character', ->
    @route 'hitPoints'
  # this.resource('posts', function() {
  #   this.route('new');
  # });

`export default router`