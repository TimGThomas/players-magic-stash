`import Character from 'appkit/models/character'`
`import ModifierHelper from 'appkit/helpers/modifier'`

CharacterRoute = Ember.Route.extend
  model: ->
    Character.get()
  actions:
    showHitPoints: ->
      @showModal 'modal-hitPoints'
    resetHitPoints: ->
      @get('controller').send 'resetHP'
      @send 'closeModal'
    showAddXP: ->
      @showModal 'modal-addXP'
    closeModal: ->
      setTimeout (=>
        @disconnectOutlet
          outlet: 'modal'
          parentView: 'application'
        @get('controller').send 'clearModalValues'), 500
      $('.modal').removeClass 'modal-show'

CharacterRoute::showModal = (view) ->
  @render view,
    into: 'application'
    outlet: 'modal'
  $('.modal').addClass 'modal-show'

`export default CharacterRoute`