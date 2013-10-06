`import App from 'appkit/app'`
`import Attack from 'appkit/models/attack'`

defaultCharacter =
  name: 'Aramil'
  race: 'Wood Elf'
  class: 'Ranger'
  xp: 0
  currentHitPoints: 20
  hitPoints: 20
  armorClass: 10
  initiativeBonus: 0
  speed: 30
  strength: 10
  dexterity: 10
  constitution: 10
  wisdom: 10
  intelligence: 10
  charisma: 10

levels = [
  0
  250
  950
  2250
  4750
  9500
  16000
  25000
  38000
  56000
  77000
  96000
  120000
  150000
  190000
  230000
  280000
  330000
  390000
  460000
]

Character = Ember.Object.extend App.Jsonable,
  excludedJsonProperties: [ 'level', 'strengthModifier', 'constitutionModifier', 'dexterityModifier', 'wisdomModifier', 'intelligenceModifier', 'charismaModifier', 'attacks', 'weaponAttacks', 'spellAttacks' ]
  level: (->
    actLevel = 0
    levels.forEach (level) =>
      if @get('xp') >= level
        actLevel = levels.indexOf(level) + 1
        return
    actLevel
    ).property 'xp'
  
  # Ability Score Modifiers
  strengthModifier: App.computed.modifierFor 'strength'
  constitutionModifier: App.computed.modifierFor 'constitution'
  dexterityModifier: App.computed.modifierFor 'dexterity'
  wisdomModifier: App.computed.modifierFor 'wisdom'
  intelligenceModifier: App.computed.modifierFor 'intelligence'
  charismaModifier: App.computed.modifierFor 'charisma'

  # Attacks
  weaponAttacks: (->
    @get('attacks').filterProperty 'type', 'weapon'
    ).property 'attacks'

  spellAttacks: (->
    @get('attacks').filterProperty 'type', 'spell'
    ).property 'attacks'

Character::save = ->
  localStorage.setItem 'character', JSON.stringify(@getJson())

Character.reopenClass
  get: ->
    existingCharacter = localStorage.getItem 'character'
    if existingCharacter
      # Add any new properties to saved Characters.
      c = Character.create Object.deepExtend defaultCharacter, JSON.parse existingCharacter
    else
      c = Character.create defaultCharacter
      c.save()
    # Mix in attacks, which are static at the moment.
    c.set 'attacks', Attack.get()
    c

`export default Character`