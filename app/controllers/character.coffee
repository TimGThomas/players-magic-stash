CharacterController = Ember.ObjectController.extend
  actions:
    save: ->
      @get('model').save()
      @toggleProperty 'isEditing'
    commitHitPoints: ->
      model = @get 'model'
      model.set 'currentHitPoints', model.get('currentHitPoints') + (+@get 'hitPointModifier')
      @set 'hitPointModifier', 0
      @get('target').send 'closeModal'
    resetHP: ->
      @get('model').set('currentHitPoints', @get('model').get('hitPoints'))
    clearModalValues: ->
      @set 'hitPointModifier', 0
  isEditing: false
  hitPointModifier: 0

`export default CharacterController`