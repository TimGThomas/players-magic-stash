AttackController = Ember.ObjectController.extend
  actions:
    commitDetails: ->
      console.debug @get('model').name
      @send 'closeModal'

`export default AttackController`