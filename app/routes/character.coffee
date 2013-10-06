`import Character from 'appkit/models/character'`
`import Attack from 'appkit/models/attack'`
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
    showAttackDetails: (model) ->
      @showModal 'modal-attackDetails', model, 'attack'
    closeModal: ->
      setTimeout (=>
        @disconnectOutlet
          outlet: 'modal'
          parentView: 'application'
        @get('controller').send 'clearModalValues'), 500
      $('.modal').removeClass 'modal-show'

CharacterRoute::showModal = (view, model, controller) ->
  @controllerFor('attack').set 'content', model if model
  renderOptions =
    into: 'application'
    outlet: 'modal'
  renderOptions.controller = controller if controller
  @render view, renderOptions
  $('.modal').addClass 'modal-show'

`export default CharacterRoute`