`import Character from 'appkit/models/character'`

CharacterRoute = Ember.Route.extend
  model: ->
    Character.get()
  actions:
    showHitPoints: ->
      @showModal 'modal-hitPoints'
    resetHitPoints: ->
      @get('controller').send 'resetHP'
      @send 'closeModal'
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