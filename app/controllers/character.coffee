CharacterController = Ember.ObjectController.extend
  isEditing: false
  edit: ->
    this.set 'isEditing', true

`export default CharacterController`