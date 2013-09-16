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
      model.save()
    resetHP: ->
      @get('model').set('currentHitPoints', @get('model').get('hitPoints'))
    commitAddXP: ->
      model = @get 'model'
      model.set 'xp', +model.get('xp') + (+@get 'xpModifier')
      @set 'xpModifier', 0
      @get('target').send 'closeModal'
      model.save()
    clearModalValues: ->
      @set 'hitPointModifier', 0
  isEditing: false
  hitPointModifier: 0
  xpModifier: 0

`export default CharacterController`