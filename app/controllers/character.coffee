CharacterController = Ember.ObjectController.extend
  isEditing: false
  hitPointModifier: 0
  commitHitPoints: ->
    model = @get 'model'
    model.set 'currentHitPoints', model.get('currentHitPoints') + (+@get 'hitPointModifier')
    @set 'hitPointModifier', 0
    @get('target').send 'closeModal'
  clearModalValues: ->
    @set 'hitPointModifier', 0

`export default CharacterController`