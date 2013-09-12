`import Character from 'appkit/models/character'`

CharacterRoute = Ember.Route.extend
  model: ->
    Character.get()

`export default CharacterRoute`