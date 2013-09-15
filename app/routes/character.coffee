`import Character from 'appkit/models/character'`

CharacterRoute = Ember.Route.extend
  model: ->
    Character.get()
  actions:
    showHitPoints: ->
      @showModal 'modal-hitPoints'
    commitHitPoints: ->
      @get('controller').send 'commitHitPoints'
    closeModal: ->
      @disconnectOutlet
        outlet: 'modal'
        parentView: 'application'
      @get('controller').send 'clearModalValues'
      $('.modal').removeClass 'modal-show'

CharacterRoute::showModal = (view) ->
  @render view,
    into: 'application'
    outlet: 'modal'
  $('.modal').addClass 'modal-show'

`export default CharacterRoute`