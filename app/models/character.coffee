Character = Ember.Object.extend()

Character.reopenClass
  get: ->
    Character.create
      name: 'Aramil'
      race: 'Wood Elf'
      class: 'Ranger'
      level: 1

`export default Character`