CharacterRoute = Ember.Route.extend
  model: ->
    name: 'Aramil'
    race: 'Wood Elf'
    class: 'Ranger'
    level: 1
  setupController: (controller, character) ->
    controller.set 'model', character

`export default CharacterRoute`