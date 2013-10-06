Attack = Ember.Object.extend()

Attack.reopenClass
  get: ->
    [
      name: 'Short Sword'
      bonus: 2
      damage: '1d6'
      type: 'weapon'
    ,
      name: 'Longbow'
      bonus: 4
      damage: '1d8'
      type: 'weapon'
    ,
      name: 'Fireball'
      bonus: 1
      damage: '2d6'
      type: 'spell'
    ]

`export default Attack`